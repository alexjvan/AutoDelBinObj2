function start() {
  var lastGrab = "";
  lastGrab = new Date();
  lastGrab = (lastGrab.getYear() - 1) + "-" + (lastGrab.getMonth() + 1) + "-" + (lastGrab.getDate());
  Logger.log(lastGrab);
  // Get rid of folders
  //var folders = DriveApp.searchFolders("modifiedDate > "+lastGrab+" and (name = bin or name = obj)");
  var folders = DriveApp.searchFolders("title = 'bin' or title = 'obj'");
  while(folders.hasNext()) {
    var folder = folders.next();
    Logger.log(folder + " deleted");
    folder.setTrashed(true);
  }
  
  // Get rid of files
  //var files = DriveApp.searchFiles("modifiedDate > "+lastGrab+"and name = desktop.ini");
  var files = DriveApp.searchFiles("title = 'desktop.ini'");
  while(files.hasNext()) {
    var file = files.next();
    Logger.log(file + " deleted");
    file.setTrashed(true);
  }
  
  // Empty trash
  Logger.log("Emptying trash");
  Drive.Files.emptyTrash();
  Logger.log("Emptied trash");
}
