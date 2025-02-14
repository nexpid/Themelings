// app/modules/links/native/BrowserManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = options;
    report = function() { // Original name: getBrowserManagerIsChromeInstalled
        mike = _closure1_slot5;
        entity = mike.getState;
        entity = entity.bind(mike)();
        entity = entity.isChromeInstalled;
        return entity;
    };
    var _closure1_slot6 = report;
    tango = function() { // Original name: getBrowserManagerSelectedBrowser
        mike = _closure1_slot5;
        entity = mike.getState;
        entity = entity.bind(mike)();
        entity = entity.selectedBrowser;
        return entity;
    };
    var _closure1_slot7 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.NativeModules;
    var _closure1_slot3 = oscar;
    oscar = oscar.BrowserManager;
    var _closure1_slot4 = oscar;
    oscar = 1;
    oscar = options[oscar];
    offset = golf.bind(entity)(oscar);
    verify = offset.create;
    oscar = function() {
        _fun73643: for(var _fun73643_ip = 0; ; ) switch(_fun73643_ip) {
 0:
            entity = {};
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = 2;
            mike = mike[oscar];
            report = undefined;
            tango = tango.bind(report)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            if(mike) { _fun73643_ip = 51; continue _fun73643 }
 39:
            mike = _closure1_slot4;
            mike = mike.isChromeInstalled;
            _fun73643_ip = 87; continue _fun73643;
 51:
            golf = _closure1_slot1;
            options = _closure1_slot2;
            tango = 3;
            tango = options[tango];
            golf = golf.bind(report)(tango);
            tango = golf.getConstants;
            tango = tango.bind(golf)();
            mike = tango.isChromeInstalled;
 87:
            entity['isChromeInstalled'] = mike;
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            tango = tango.bind(report)(mike);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            if(mike) { _fun73643_ip = 133; continue _fun73643 }
 121:
            mike = _closure1_slot4;
            mike = mike.selectedBrowser;
            _fun73643_ip = 169; continue _fun73643;
 133:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 3;
            zulu = oscar[zulu];
            tango = tango.bind(report)(zulu);
            zulu = tango.getConstants;
            zulu = zulu.bind(tango)();
            mike = zulu.selectedBrowser;
 169:
            entity['selectedBrowser'] = mike;
            return entity;
        }
    };
    oscar = verify.bind(offset)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 6;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/links/native/BrowserManager.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function() { // Original name: useBrowserManagerIsChromeInstalled
        zulu = _closure1_slot5;
        mike = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.isChromeInstalled;
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useBrowserManagerIsChromeInstalled'] = oscar;
    zulu['getBrowserManagerIsChromeInstalled'] = report;
    report = function() { // Original name: useBrowserManagerSelectedBrowser
        zulu = _closure1_slot5;
        mike = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.selectedBrowser;
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['useBrowserManagerSelectedBrowser'] = report;
    zulu['getBrowserManagerSelectedBrowser'] = tango;
    tango = function(argFoo) { // Original name: browserManagerOpenUrl
        _fun73648: for(var _fun73648_ip = 0; ; ) switch(_fun73648_ip) {
 0:
            zulu = argFoo;
            golf = arguments[1];
            tango = undefined;
            if(!(golf === tango)) { _fun73648_ip = 23; continue _fun73648 }
 12:
            entity = _closure1_slot7;
            golf = entity.bind(tango)();
 23:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = 4;
            mike = mike[oscar];
            mike = report.bind(tango)(mike);
            mike = mike.WebBrowserType;
            mike = mike.SAFARI;
            if(!(golf !== mike)) { _fun73648_ip = 400; continue _fun73648 }
 65:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(tango)(mike);
            mike = mike.WebBrowserType;
            mike = mike.CHROME;
            if(!(golf === mike)) { _fun73648_ip = 112; continue _fun73648 }
 98:
            mike = _closure1_slot6;
            mike = mike.bind(tango)();
            if(!mike) { _fun73648_ip = 400; continue _fun73648 }
 112:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(tango)(mike);
            mike = mike.WebBrowserType;
            mike = mike.IN_APP;
            if(!(golf !== mike)) { _fun73648_ip = 318; continue _fun73648 }
 148:
            report = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = report.bind(tango)(mike);
            mike = mike.WebBrowserType;
            mike = mike.CHROME;
            if(!(golf !== mike)) { _fun73648_ip = 233; continue _fun73648 }
 181:
            mike = global;
            oscar = mike.Error;
            mike = mike.HermesInternal;
            report = mike.concat;
            mike = 'Unknown browser type: ';
            verify = report.bind(mike)(golf);
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            offset = report;
            mike = new offset[oscar](verify, options);
            mike = mike instanceof Object ? mike : report;
            throw mike;
 233:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 2;
            mike = oscar[mike];
            report = report.bind(tango)(mike);
            mike = report.isAndroid;
            mike = mike.bind(report)();
            if(mike) { _fun73648_ip = 285; continue _fun73648 }
 265:
            oscar = _closure1_slot4;
            report = oscar.openInChromeURL;
            mike = true;
            mike = report.bind(oscar)(zulu, mike);
            _fun73648_ip = 316; continue _fun73648;
 285:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 3;
            report = golf[report];
            oscar = oscar.bind(tango)(report);
            report = oscar.openInChromeURL;
            mike = report.bind(oscar)(zulu);
 316:
            return mike;
 318:
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 2;
            mike = oscar[mike];
            report = report.bind(tango)(mike);
            mike = report.isAndroid;
            mike = mike.bind(report)();
            if(mike) { _fun73648_ip = 367; continue _fun73648 }
 350:
            report = _closure1_slot4;
            mike = report.openInAppURL;
            mike = mike.bind(report)(zulu);
            _fun73648_ip = 398; continue _fun73648;
 367:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 3;
            report = golf[report];
            oscar = oscar.bind(tango)(report);
            report = oscar.openInAppURL;
            mike = report.bind(oscar)(zulu);
 398:
            return mike;
 400:
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.performURLNavigation;
            entity = entity.bind(mike)(zulu);
            entity = global;
            mike = entity.Promise;
            entity = mike.resolve;
            entity = entity.bind(mike)();
            return entity;
        }
    };
    zulu['browserManagerOpenUrl'] = tango;
    tango = function(argFoo) { // Original name: browserManagerSelectBrowser
        _fun73649: for(var _fun73649_ip = 0; ; ) switch(_fun73649_ip) {
 0:
            report = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun73649_ip = 66; continue _fun73649 }
 40:
            zulu = _closure1_slot3;
            tango = zulu.BrowserManager;
            zulu = tango.selectBrowser;
            zulu = zulu.bind(tango)(report);
            _fun73649_ip = 346; continue _fun73649;
 66:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = 4;
            zulu = zulu[oscar];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.WebBrowserType;
            zulu = zulu.SAFARI;
            if(!(zulu !== report)) { _fun73649_ip = 290; continue _fun73649 }
 105:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.WebBrowserType;
            zulu = zulu.IN_APP;
            if(!(zulu !== report)) { _fun73649_ip = 232; continue _fun73649 }
 138:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[oscar];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.WebBrowserType;
            zulu = zulu.CHROME;
            if(!(zulu === report)) { _fun73649_ip = 346; continue _fun73649 }
 174:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 3;
            tango = options[zulu];
            oscar = oscar.bind(entity)(tango);
            tango = oscar.selectBrowser;
            golf = _closure1_slot0;
            zulu = options[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.BrowserType;
            zulu = zulu.CHROME;
            zulu = tango.bind(oscar)(zulu);
            _fun73649_ip = 346; continue _fun73649;
 232:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 3;
            tango = options[zulu];
            oscar = oscar.bind(entity)(tango);
            tango = oscar.selectBrowser;
            golf = _closure1_slot0;
            zulu = options[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.BrowserType;
            zulu = zulu.IN_APP;
            zulu = tango.bind(oscar)(zulu);
            _fun73649_ip = 346; continue _fun73649;
 290:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 3;
            tango = options[zulu];
            oscar = oscar.bind(entity)(tango);
            tango = oscar.selectBrowser;
            golf = _closure1_slot0;
            zulu = options[zulu];
            zulu = golf.bind(entity)(zulu);
            zulu = zulu.BrowserType;
            zulu = zulu.SAFARI;
            zulu = tango.bind(oscar)(zulu);
 346:
            tango = _closure1_slot5;
            zulu = tango.setState;
            mike = {};
            mike['selectedBrowser'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['browserManagerSelectBrowser'] = tango;
    mike = function() { // Original name: browserManagerCloseBrowser
        _fun73650: for(var _fun73650_ip = 0; ; ) switch(_fun73650_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun73650_ip = 59; continue _fun73650 }
 37:
            mike = _closure1_slot3;
            zulu = mike.BrowserManager;
            mike = zulu.closeBrowser;
            mike = mike.bind(zulu)();
 59:
            return entity;
        }
    };
    zulu['browserManagerCloseBrowser'] = mike;
    return entity;
})();