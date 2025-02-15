// app/utils/PlatformUtils.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    zulu = argFred;
    tango = function() { // Original name: isWindows
        zulu = /^win/;
        mike = zulu.test;
        entity = _closure1_slot1;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot2 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    report = true;
    oscar['value'] = report;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    oscar = {};
    entity = 'WINDOWS';
    oscar['WINDOWS'] = entity;
    entity = 'OSX';
    oscar['OSX'] = entity;
    entity = 'LINUX';
    oscar['LINUX'] = entity;
    entity = 'WEB';
    oscar['WEB'] = entity;
    var _closure1_slot0 = oscar;
    entity = 'android';
    var _closure1_slot1 = entity;
    golf = argPlugh;
    entity = 0;
    options = golf[entity];
    golf = argBar;
    entity = undefined;
    verify = golf.bind(entity)(options);
    options = verify.fileFinishedImporting;
    golf = 'utils/PlatformUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['PlatformTypes'] = oscar;
    zulu['isPlatformEmbedded'] = report;
    zulu['isWindows'] = tango;
    tango = function() { // Original name: isMac
        entity = false;
        return entity;
    };
    zulu['isMac'] = tango;
    tango = function() { // Original name: isLinux
        entity = false;
        return entity;
    };
    zulu['isLinux'] = tango;
    tango = function() { // Original name: isDesktop
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = _closure1_slot2;
            entity = undefined;
            entity = mike.bind(entity)();
            if(entity) { _fun00002_ip = 18; continue _fun00001 }
 16:
            entity = false;
 18:
            return entity;
        }
    };
    zulu['isDesktop'] = tango;
    tango = function() { // Original name: isWeb
        entity = false;
        return entity;
    };
    zulu['isWeb'] = tango;
    tango = function() { // Original name: isAndroidChrome
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = global;
            entity = mike.navigator;
            entity = entity.userAgent;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun00004_ip = 66; continue _fun00003 }
 23:
            mike = mike.navigator;
            tango = mike.userAgent;
            mike = tango.toLowerCase;
            report = mike.bind(tango)();
            tango = report.match;
            mike = '(android ).+chrome/[.0-9]* mobile';
            mike = tango.bind(report)(mike);
            entity = zulu != mike;
 66:
            return entity;
        }
    };
    zulu['isAndroidChrome'] = tango;
    tango = function() { // Original name: isAndroidWeb
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = global;
            entity = entity.navigator;
            report = entity.userAgent;
            mike = null;
            zulu = mike == report;
            entity = undefined;
            if(zulu) { _fun00006_ip = 50; continue _fun00005 }
 25:
            tango = report.match;
            zulu = /android/i;
            entity = tango.bind(report)(zulu);
 50:
            entity = mike != entity;
            return entity;
        }
    };
    zulu['isAndroidWeb'] = tango;
    tango = function() { // Original name: isMacWeb
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = global;
            entity = entity.navigator;
            report = entity.userAgent;
            mike = null;
            zulu = mike == report;
            entity = undefined;
            if(zulu) { _fun00008_ip = 50; continue _fun00007 }
 25:
            tango = report.match;
            zulu = /Macintosh/i;
            entity = tango.bind(report)(zulu);
 50:
            entity = mike != entity;
            return entity;
        }
    };
    zulu['isMacWeb'] = tango;
    tango = function() { // Original name: isAndroid
        entity = true;
        return entity;
    };
    zulu['isAndroid'] = tango;
    tango = function() { // Original name: isIOS
        entity = false;
        return entity;
    };
    zulu['isIOS'] = tango;
    tango = function() { // Original name: getPlatform
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = _closure1_slot2;
            entity = undefined;
            entity = zulu.bind(entity)();
            mike = _closure1_slot0;
            if(entity) { _fun00010_ip = 28; continue _fun00009 }
 20:
            entity = mike.WEB;
            _fun00010_ip = 34; continue _fun00009;
 28:
            entity = mike.WINDOWS;
 34:
            return entity;
        }
    };
    zulu['getPlatform'] = tango;
    tango = function() { // Original name: getPlatformName
        entity = _closure1_slot1;
        return entity;
    };
    zulu['getPlatformName'] = tango;
    tango = function() { // Original name: getNativePlatform
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = _closure1_slot1;
            mike = 'ios';
            if(!(mike !== zulu)) { _fun00012_ip = 29; continue _fun00011 }
 15:
            mike = 'android';
            if(!(mike !== zulu)) { _fun00012_ip = 29; continue _fun00011 }
 23:
            mike = 'web';
            return mike;
 29:
            entity = _closure1_slot1;
            return entity;
        }
    };
    zulu['getNativePlatform'] = tango;
    mike = function() { // Original name: getOS
        entity = global;
        entity = entity.window;
        entity = entity.navigator;
        entity = entity.userAgent;
        entity = 'android';
        return entity;
    };
    zulu['getOS'] = mike;
    return entity;
})();