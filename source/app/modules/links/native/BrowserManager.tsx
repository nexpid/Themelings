// app/modules/links/native/BrowserManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    report = function() { // Original name: getBrowserManagerIsChromeInstalled
        michal = _closure1_slot5;
        entity = michal.getState;
        entity = entity.bind(michal)();
        entity = entity.isChromeInstalled;
        return entity;
    };
    var _closure1_slot6 = report;
    tangon = function() { // Original name: getBrowserManagerSelectedBrowser
        michal = _closure1_slot5;
        entity = michal.getState;
        entity = entity.bind(michal)();
        entity = entity.selectedBrowser;
        return entity;
    };
    var _closure1_slot7 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.NativeModules;
    var _closure1_slot3 = oscard;
    oscard = oscard.BrowserManager;
    var _closure1_slot4 = oscard;
    oscard = 1;
    oscard = option[oscard];
    offset = golfie.bind(entity)(oscard);
    verify = offset.create;
    oscard = function() {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = {};
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            oscard = 2;
            michal = michal[oscard];
            report = undefined;
            tangon = tangon.bind(report)(michal);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            if(michal) { _fun00002_ip = 51; continue _fun00001 }
 39:
            michal = _closure1_slot4;
            michal = michal.isChromeInstalled;
            _fun00002_ip = 87; continue _fun00001;
 51:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 3;
            tangon = option[tangon];
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.getConstants;
            tangon = tangon.bind(golfie)();
            michal = tangon.isChromeInstalled;
 87:
            entity['isChromeInstalled'] = michal;
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            tangon = tangon.bind(report)(michal);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            if(michal) { _fun00002_ip = 133; continue _fun00001 }
 121:
            michal = _closure1_slot4;
            michal = michal.selectedBrowser;
            _fun00002_ip = 169; continue _fun00001;
 133:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 3;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.getConstants;
            zuuluu = zuuluu.bind(tangon)();
            michal = zuuluu.selectedBrowser;
 169:
            entity['selectedBrowser'] = michal;
            return entity;
        }
    };
    oscard = verify.bind(offset)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/links/native/BrowserManager.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function() { // Original name: useBrowserManagerIsChromeInstalled
        zuuluu = _closure1_slot5;
        michal = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.isChromeInstalled;
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useBrowserManagerIsChromeInstalled'] = oscard;
    zuuluu['getBrowserManagerIsChromeInstalled'] = report;
    report = function() { // Original name: useBrowserManagerSelectedBrowser
        zuuluu = _closure1_slot5;
        michal = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.selectedBrowser;
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useBrowserManagerSelectedBrowser'] = report;
    zuuluu['getBrowserManagerSelectedBrowser'] = tangon;
    tangon = function(argFoo) { // Original name: browserManagerOpenUrl
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            golfie = arguments[1];
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00004_ip = 23; continue _fun00003 }
 12:
            entity = _closure1_slot7;
            golfie = entity.bind(tangon)();
 23:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            oscard = 4;
            michal = michal[oscard];
            michal = report.bind(tangon)(michal);
            michal = michal.WebBrowserType;
            michal = michal.SAFARI;
            if(!(golfie !== michal)) { _fun00004_ip = 400; continue _fun00003 }
 65:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(tangon)(michal);
            michal = michal.WebBrowserType;
            michal = michal.CHROME;
            if(!(golfie === michal)) { _fun00004_ip = 112; continue _fun00003 }
 98:
            michal = _closure1_slot6;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00004_ip = 400; continue _fun00003 }
 112:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(tangon)(michal);
            michal = michal.WebBrowserType;
            michal = michal.IN_APP;
            if(!(golfie !== michal)) { _fun00004_ip = 318; continue _fun00003 }
 148:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = report.bind(tangon)(michal);
            michal = michal.WebBrowserType;
            michal = michal.CHROME;
            if(!(golfie !== michal)) { _fun00004_ip = 233; continue _fun00003 }
 181:
            michal = global;
            oscard = michal.Error;
            michal = michal.HermesInternal;
            report = michal.concat;
            michal = 'Unknown browser type: ';
            verify = report.bind(michal)(golfie);
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            offset = report;
            michal = new offset[oscard](verify, option);
            michal = michal instanceof Object ? michal : report;
            throw michal;
 233:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            report = report.bind(tangon)(michal);
            michal = report.isAndroid;
            michal = michal.bind(report)();
            if(michal) { _fun00004_ip = 285; continue _fun00003 }
 265:
            oscard = _closure1_slot4;
            report = oscard.openInChromeURL;
            michal = true;
            michal = report.bind(oscard)(zuuluu, michal);
            _fun00004_ip = 316; continue _fun00003;
 285:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 3;
            report = golfie[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.openInChromeURL;
            michal = report.bind(oscard)(zuuluu);
 316:
            return michal;
 318:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            report = report.bind(tangon)(michal);
            michal = report.isAndroid;
            michal = michal.bind(report)();
            if(michal) { _fun00004_ip = 367; continue _fun00003 }
 350:
            report = _closure1_slot4;
            michal = report.openInAppURL;
            michal = michal.bind(report)(zuuluu);
            _fun00004_ip = 398; continue _fun00003;
 367:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 3;
            report = golfie[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.openInAppURL;
            michal = report.bind(oscard)(zuuluu);
 398:
            return michal;
 400:
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 5;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.performURLNavigation;
            entity = entity.bind(michal)(zuuluu);
            entity = global;
            michal = entity.Promise;
            entity = michal.resolve;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['browserManagerOpenUrl'] = tangon;
    tangon = function(argFoo) { // Original name: browserManagerSelectBrowser
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00006_ip = 66; continue _fun00005 }
 40:
            zuuluu = _closure1_slot3;
            tangon = zuuluu.BrowserManager;
            zuuluu = tangon.selectBrowser;
            zuuluu = zuuluu.bind(tangon)(report);
            _fun00006_ip = 346; continue _fun00005;
 66:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            oscard = 4;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.WebBrowserType;
            zuuluu = zuuluu.SAFARI;
            if(!(zuuluu !== report)) { _fun00006_ip = 290; continue _fun00005 }
 105:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.WebBrowserType;
            zuuluu = zuuluu.IN_APP;
            if(!(zuuluu !== report)) { _fun00006_ip = 232; continue _fun00005 }
 138:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[oscard];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.WebBrowserType;
            zuuluu = zuuluu.CHROME;
            if(!(zuuluu === report)) { _fun00006_ip = 346; continue _fun00005 }
 174:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 3;
            tangon = option[zuuluu];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.selectBrowser;
            golfie = _closure1_slot0;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.BrowserType;
            zuuluu = zuuluu.CHROME;
            zuuluu = tangon.bind(oscard)(zuuluu);
            _fun00006_ip = 346; continue _fun00005;
 232:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 3;
            tangon = option[zuuluu];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.selectBrowser;
            golfie = _closure1_slot0;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.BrowserType;
            zuuluu = zuuluu.IN_APP;
            zuuluu = tangon.bind(oscard)(zuuluu);
            _fun00006_ip = 346; continue _fun00005;
 290:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 3;
            tangon = option[zuuluu];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.selectBrowser;
            golfie = _closure1_slot0;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.BrowserType;
            zuuluu = zuuluu.SAFARI;
            zuuluu = tangon.bind(oscard)(zuuluu);
 346:
            tangon = _closure1_slot5;
            zuuluu = tangon.setState;
            michal = {};
            michal['selectedBrowser'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['browserManagerSelectBrowser'] = tangon;
    michal = function() { // Original name: browserManagerCloseBrowser
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00008_ip = 59; continue _fun00007 }
 37:
            michal = _closure1_slot3;
            zuuluu = michal.BrowserManager;
            michal = zuuluu.closeBrowser;
            michal = michal.bind(zuuluu)();
 59:
            return entity;
        }
    };
    zuuluu['browserManagerCloseBrowser'] = michal;
    return entity;
})();