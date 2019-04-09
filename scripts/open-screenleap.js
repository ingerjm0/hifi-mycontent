/*globals Tablet, Entities, ScriptDiscoveryService*/
(function(){
  var MARKETPLACE_QUALIFIER = 'https://highfidelity.com/marketplace/items/';
  var MARKETPLACE_INJECT_SCRIPT = ScriptDiscoveryService.defaultScriptsPath + "/system/html/js/marketplacesInject.js";
  
  var url;
  var tablet;
  var shouldInjectMarketplaceCode = false;
  
  function navigateToPage() {
    shouldInjectMarketplaceCode ? tablet.gotoWebScreen(url, MARKETPLACE_INJECT_SCRIPT) : tablet.gotoWebScreen(url);
  }

  var OpenTabletButton = function() {};
  
  OpenTabletButton.prototype = {
    preload : function(entityID) {
      try {
        url = JSON.parse(Entities.getEntityProperties(entityID, 'userData').userData).url;
        if (url.indexOf(MARKETPLACE_QUALIFIER) != -1) {
          shouldInjectMarketplaceCode = true;
        }
      } catch (e) {
        print("Unable to find a valid URL");
        url = "https://highfidelity.com";
      }
      tablet = Tablet.getTablet("com.highfidelity.interface.tablet.system");
     
    },
    clickDownOnEntity : function() {
      navigateToPage();
    },
    startFarTrigger: function() {
      navigateToPage();
    }
  };
  return new OpenTabletButton();
});