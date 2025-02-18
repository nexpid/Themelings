// app/utils/PlatformUtils.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    zuuluu = argFre;
    tangon = function() { // Original name: isWindows
        zuuluu = /^win/;
        michal = zuuluu.test;
        entity = _closure1_slot1;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    report = true;
    oscard['value'] = report;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    oscard = {};
    entity = 'WINDOWS';
    oscard['WINDOWS'] = entity;
    entity = 'OSX';
    oscard['OSX'] = entity;
    entity = 'LINUX';
    oscard['LINUX'] = entity;
    entity = 'WEB';
    oscard['WEB'] = entity;
    var _closure1_slot0 = oscard;
    entity = 'android';
    var _closure1_slot1 = entity;
    golfie = argPlu;
    entity = 0;
    option = golfie[entity];
    golfie = argBar;
    entity = undefined;
    verify = golfie.bind(entity)(option);
    option = verify.fileFinishedImporting;
    golfie = 'utils/PlatformUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['PlatformTypes'] = oscard;
    zuuluu['isPlatformEmbedded'] = report;
    zuuluu['isWindows'] = tangon;
    tangon = function() { // Original name: isMac
        entity = false;
        return entity;
    };
    zuuluu['isMac'] = tangon;
    tangon = function() { // Original name: isLinux
        entity = false;
        return entity;
    };
    zuuluu['isLinux'] = tangon;
    tangon = function() { // Original name: isDesktop
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot2;
            entity = undefined;
            entity = michal.bind(entity)();
            if(entity) { _fun00002_ip = 18; continue _fun00001 }
 16:
            entity = false;
 18:
            return entity;
        }
    };
    zuuluu['isDesktop'] = tangon;
    tangon = function() { // Original name: isWeb
        entity = false;
        return entity;
    };
    zuuluu['isWeb'] = tangon;
    tangon = function() { // Original name: isAndroidChrome
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = global;
            entity = michal.navigator;
            entity = entity.userAgent;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00004_ip = 66; continue _fun00003 }
 23:
            michal = michal.navigator;
            tangon = michal.userAgent;
            michal = tangon.toLowerCase;
            report = michal.bind(tangon)();
            tangon = report.match;
            michal = '(android ).+chrome/[.0-9]* mobile';
            michal = tangon.bind(report)(michal);
            entity = zuuluu != michal;
 66:
            return entity;
        }
    };
    zuuluu['isAndroidChrome'] = tangon;
    tangon = function() { // Original name: isAndroidWeb
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = global;
            entity = entity.navigator;
            report = entity.userAgent;
            michal = null;
            zuuluu = michal == report;
            entity = undefined;
            if(zuuluu) { _fun00006_ip = 50; continue _fun00005 }
 25:
            tangon = report.match;
            zuuluu = /android/i;
            entity = tangon.bind(report)(zuuluu);
 50:
            entity = michal != entity;
            return entity;
        }
    };
    zuuluu['isAndroidWeb'] = tangon;
    tangon = function() { // Original name: isMacWeb
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = global;
            entity = entity.navigator;
            report = entity.userAgent;
            michal = null;
            zuuluu = michal == report;
            entity = undefined;
            if(zuuluu) { _fun00008_ip = 50; continue _fun00007 }
 25:
            tangon = report.match;
            zuuluu = /Macintosh/i;
            entity = tangon.bind(report)(zuuluu);
 50:
            entity = michal != entity;
            return entity;
        }
    };
    zuuluu['isMacWeb'] = tangon;
    tangon = function() { // Original name: isAndroid
        entity = true;
        return entity;
    };
    zuuluu['isAndroid'] = tangon;
    tangon = function() { // Original name: isIOS
        entity = false;
        return entity;
    };
    zuuluu['isIOS'] = tangon;
    tangon = function() { // Original name: getPlatform
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot2;
            entity = undefined;
            entity = zuuluu.bind(entity)();
            michal = _closure1_slot0;
            if(entity) { _fun00010_ip = 28; continue _fun00009 }
 20:
            entity = michal.WEB;
            _fun00010_ip = 34; continue _fun00009;
 28:
            entity = michal.WINDOWS;
 34:
            return entity;
        }
    };
    zuuluu['getPlatform'] = tangon;
    tangon = function() { // Original name: getPlatformName
        entity = _closure1_slot1;
        return entity;
    };
    zuuluu['getPlatformName'] = tangon;
    tangon = function() { // Original name: getNativePlatform
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot1;
            michal = 'ios';
            if(!(michal !== zuuluu)) { _fun00012_ip = 29; continue _fun00011 }
 15:
            michal = 'android';
            if(!(michal !== zuuluu)) { _fun00012_ip = 29; continue _fun00011 }
 23:
            michal = 'web';
            return michal;
 29:
            entity = _closure1_slot1;
            return entity;
        }
    };
    zuuluu['getNativePlatform'] = tangon;
    michal = function() { // Original name: getOS
        entity = global;
        entity = entity.window;
        entity = entity.navigator;
        entity = entity.userAgent;
        entity = 'android';
        return entity;
    };
    zuuluu['getOS'] = michal;
    return entity;
})();