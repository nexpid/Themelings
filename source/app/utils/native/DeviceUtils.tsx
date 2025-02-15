// app/utils/native/DeviceUtils.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscar = argBar;
        offset = argBaz;
        zulu = argFred;
        golf = argPlugh;
        var _closure1_slot0 = oscar;
        var _closure1_slot1 = offset;
        var _closure1_slot2 = golf;
        tango = function() { // Original name: getDevice
            entity = _closure1_slot3;
            entity = entity.device;
            return entity;
        };
        var _closure1_slot6 = tango;
        entity = global;
        verify = entity.Object;
        options = verify.defineProperty;
        report = {};
        entity = true;
        report['value'] = entity;
        entity = '__esModule';
        entity = options.bind(verify)(zulu, entity, report);
        entity = 0;
        report = golf[entity];
        entity = undefined;
        report = oscar.bind(entity)(report);
        report = report.NativeModules;
        options = 1;
        options = golf[options];
        verify = oscar.bind(entity)(options);
        options = verify.isAndroid;
        options = options.bind(verify)();
        if(options) { _fun00002_ip = 118; continue _fun00001 }
 110:
        report = report.DCDDeviceManager;
        _fun00002_ip = 163; continue _fun00001;
 118:
        verify = 2;
        options = golf[verify];
        yankee = offset.bind(entity)(options);
        options = null;
        yankee = options == yankee;
        options = undefined;
        if(yankee) { _fun00002_ip = 160; continue _fun00001 }
 141:
        verify = golf[verify];
        offset = offset.bind(entity)(verify);
        verify = offset.getConstants;
        options = verify.bind(offset)();
 160:
        report = options;
 163:
        var _closure1_slot3 = report;
        report = null;
        var _closure1_slot4 = report;
        report = 'mediaPerformanceClass';
        var _closure1_slot5 = report;
        report = 4;
        report = golf[report];
        golf = oscar.bind(entity)(report);
        oscar = golf.fileFinishedImporting;
        report = 'utils/native/DeviceUtils.tsx';
        report = oscar.bind(golf)(report);
        report = function() { // Original name: isIpadOS
            entity = _closure1_slot3;
            mike = entity.deviceModel;
            entity = 'iPad';
            entity = entity === mike;
            return entity;
        };
        zulu['isIpadOS'] = report;
        report = function() { // Original name: isGestureNavigationEnabled
            entity = _closure1_slot3;
            entity = entity.isGestureNavigationEnabled;
            return entity;
        };
        zulu['isGestureNavigationEnabled'] = report;
        report = function() { // Original name: isTaskBarEnabled
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure1_slot3;
                entity = null;
                tango = entity == mike;
                mike = undefined;
                if(tango) { _fun00004_ip = 28; continue _fun00003 }
 18:
                zulu = _closure1_slot3;
                mike = zulu.isTaskBarEnabled;
 28:
                entity = entity != mike;
                if(!entity) { _fun00004_ip = 38; continue _fun00003 }
 35:
                entity = mike;
 38:
                return entity;
            }
        };
        zulu['isTaskBarEnabled'] = report;
        report = function() { // Original name: getSystemVersion
            entity = _closure1_slot3;
            entity = entity.systemVersion;
            return entity;
        };
        zulu['getSystemVersion'] = report;
        zulu['getDevice'] = tango;
        tango = function() { // Original name: getDeviceInfo
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 1;
                entity = tango[entity];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isAndroid;
                entity = entity.bind(zulu)();
                zulu = _closure1_slot6;
                tango = zulu.bind(tango)();
                if(entity) { _fun00006_ip = 50; continue _fun00005 }
 45:
                entity = tango;
                _fun00006_ip = 82; continue _fun00005;
 50:
                zulu = ' (';
                zulu = tango + zulu;
                mike = _closure1_slot3;
                mike = mike.deviceModel;
                zulu = zulu + mike;
                mike = ')';
                entity = zulu + mike;
 82:
                return entity;
            }
        };
        zulu['getDeviceInfo'] = tango;
        tango = function() { // Original name: getDeviceMediaPerformanceClass
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 1;
                entity = tango[entity];
                report = undefined;
                zulu = zulu.bind(report)(entity);
                entity = zulu.isAndroid;
                zulu = entity.bind(zulu)();
                oscar = null;
                entity = null;
                if(!zulu) { _fun00008_ip = 187; continue _fun00007 }
 44:
                zulu = _closure1_slot4;
                zulu = oscar == zulu;
                if(!zulu) { _fun00008_ip = 103; continue _fun00007 }
 55:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                tango = 3;
                tango = options[tango];
                tango = golf.bind(report)(tango);
                options = tango.Storage;
                golf = options.get;
                tango = _closure1_slot5;
                tango = golf.bind(options)(tango);
                _closure1_slot4 = tango;
                zulu = oscar == tango;
 103:
                if(!zulu) { _fun00008_ip = 183; continue _fun00007 }
 106:
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 2;
                zulu = oscar[zulu];
                tango = tango.bind(report)(zulu);
                zulu = tango.getMediaPerformanceClass;
                zulu = zulu.bind(tango)();
                _closure1_slot4 = zulu;
                tango = _closure1_slot0;
                zulu = 3;
                zulu = oscar[zulu];
                zulu = tango.bind(report)(zulu);
                oscar = zulu.Storage;
                report = oscar.set;
                tango = _closure1_slot5;
                zulu = _closure1_slot4;
                zulu = report.bind(oscar)(tango, zulu);
 183:
                entity = _closure1_slot4;
 187:
                return entity;
            }
        };
        zulu['getDeviceMediaPerformanceClass'] = tango;
        tango = function() { // Original name: getDeviceModel
            entity = _closure1_slot3;
            entity = entity.deviceModel;
            return entity;
        };
        zulu['getDeviceModel'] = tango;
        tango = function() { // Original name: getDeviceBrand
            entity = _closure1_slot3;
            entity = entity.deviceBrand;
            return entity;
        };
        zulu['getDeviceBrand'] = tango;
        tango = function() { // Original name: getDeviceProduct
            entity = _closure1_slot3;
            entity = entity.deviceProduct;
            return entity;
        };
        zulu['getDeviceProduct'] = tango;
        tango = function() { // Original name: getDeviceManufacturer
            entity = _closure1_slot3;
            entity = entity.deviceManufacturer;
            return entity;
        };
        zulu['getDeviceManufacturer'] = tango;
        tango = function() { // Original name: getSmallestScreenWidth
            entity = _closure1_slot3;
            entity = entity.smallestScreenWidth;
            return entity;
        };
        zulu['getSmallestScreenWidth'] = tango;
        tango = function() { // Original name: getSocName
            entity = _closure1_slot3;
            entity = entity.socName;
            return entity;
        };
        zulu['getSocName'] = tango;
        tango = function() { // Original name: getRamSize
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = _closure1_slot3;
                tango = entity.ramSize;
                zulu = undefined;
                mike = '';
                entity = undefined;
                if(!(mike !== tango)) { _fun00010_ip = 40; continue _fun00009 }
 27:
                mike = global;
                mike = mike.parseFloat;
                entity = mike.bind(zulu)(tango);
 40:
                return entity;
            }
        };
        zulu['getRamSize'] = tango;
        tango = function() { // Original name: getMaxCpuFreq
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = _closure1_slot3;
                tango = entity.maxCpuFreq;
                zulu = undefined;
                mike = '';
                entity = undefined;
                if(!(mike !== tango)) { _fun00012_ip = 40; continue _fun00011 }
 27:
                mike = global;
                mike = mike.parseFloat;
                entity = mike.bind(zulu)(tango);
 40:
                return entity;
            }
        };
        zulu['getMaxCpuFreq'] = tango;
        mike = function() { // Original name: getTimeZone
            entity = _closure1_slot3;
            entity = entity.timeZone;
            return entity;
        };
        zulu['getTimeZone'] = mike;
        return entity;
    }
})();