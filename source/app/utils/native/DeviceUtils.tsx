// app/utils/native/DeviceUtils.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscard = argBar;
        offset = argBaz;
        zuuluu = argFre;
        golfie = argPlu;
        var _closure1_slot0 = oscard;
        var _closure1_slot1 = offset;
        var _closure1_slot2 = golfie;
        tangon = function() { // Original name: getDevice
            entity = _closure1_slot3;
            entity = entity.device;
            return entity;
        };
        var _closure1_slot6 = tangon;
        entity = global;
        verify = entity.Object;
        option = verify.defineProperty;
        report = {};
        entity = true;
        report['value'] = entity;
        entity = '__esModule';
        entity = option.bind(verify)(zuuluu, entity, report);
        entity = 0;
        report = golfie[entity];
        entity = undefined;
        report = oscard.bind(entity)(report);
        report = report.NativeModules;
        option = 1;
        option = golfie[option];
        verify = oscard.bind(entity)(option);
        option = verify.isAndroid;
        option = option.bind(verify)();
        if(option) { _fun00002_ip = 118; continue _fun00001 }
 110:
        report = report.DCDDeviceManager;
        _fun00002_ip = 163; continue _fun00001;
 118:
        verify = 2;
        option = golfie[verify];
        yankee = offset.bind(entity)(option);
        option = null;
        yankee = option == yankee;
        option = undefined;
        if(yankee) { _fun00002_ip = 160; continue _fun00001 }
 141:
        verify = golfie[verify];
        offset = offset.bind(entity)(verify);
        verify = offset.getConstants;
        option = verify.bind(offset)();
 160:
        report = option;
 163:
        var _closure1_slot3 = report;
        report = null;
        var _closure1_slot4 = report;
        report = 'mediaPerformanceClass';
        var _closure1_slot5 = report;
        report = 4;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.fileFinishedImporting;
        report = 'utils/native/DeviceUtils.tsx';
        report = oscard.bind(golfie)(report);
        report = function() { // Original name: isIpadOS
            entity = _closure1_slot3;
            michal = entity.deviceModel;
            entity = 'iPad';
            entity = entity === michal;
            return entity;
        };
        zuuluu['isIpadOS'] = report;
        report = function() { // Original name: isGestureNavigationEnabled
            entity = _closure1_slot3;
            entity = entity.isGestureNavigationEnabled;
            return entity;
        };
        zuuluu['isGestureNavigationEnabled'] = report;
        report = function() { // Original name: getSystemVersion
            entity = _closure1_slot3;
            entity = entity.systemVersion;
            return entity;
        };
        zuuluu['getSystemVersion'] = report;
        zuuluu['getDevice'] = tangon;
        tangon = function() { // Original name: getDeviceInfo
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 1;
                entity = tangon[entity];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = zuuluu.isAndroid;
                entity = entity.bind(zuuluu)();
                zuuluu = _closure1_slot6;
                tangon = zuuluu.bind(tangon)();
                if(entity) { _fun00004_ip = 50; continue _fun00003 }
 45:
                entity = tangon;
                _fun00004_ip = 82; continue _fun00003;
 50:
                zuuluu = ' (';
                zuuluu = tangon + zuuluu;
                michal = _closure1_slot3;
                michal = michal.deviceModel;
                zuuluu = zuuluu + michal;
                michal = ')';
                entity = zuuluu + michal;
 82:
                return entity;
            }
        };
        zuuluu['getDeviceInfo'] = tangon;
        tangon = function() { // Original name: getDeviceMediaPerformanceClass
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 1;
                entity = tangon[entity];
                report = undefined;
                zuuluu = zuuluu.bind(report)(entity);
                entity = zuuluu.isAndroid;
                zuuluu = entity.bind(zuuluu)();
                oscard = null;
                entity = null;
                if(!zuuluu) { _fun00006_ip = 187; continue _fun00005 }
 44:
                zuuluu = _closure1_slot4;
                zuuluu = oscard == zuuluu;
                if(!zuuluu) { _fun00006_ip = 103; continue _fun00005 }
 55:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                tangon = 3;
                tangon = option[tangon];
                tangon = golfie.bind(report)(tangon);
                option = tangon.Storage;
                golfie = option.get;
                tangon = _closure1_slot5;
                tangon = golfie.bind(option)(tangon);
                _closure1_slot4 = tangon;
                zuuluu = oscard == tangon;
 103:
                if(!zuuluu) { _fun00006_ip = 183; continue _fun00005 }
 106:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 2;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.getMediaPerformanceClass;
                zuuluu = zuuluu.bind(tangon)();
                _closure1_slot4 = zuuluu;
                tangon = _closure1_slot0;
                zuuluu = 3;
                zuuluu = oscard[zuuluu];
                zuuluu = tangon.bind(report)(zuuluu);
                oscard = zuuluu.Storage;
                report = oscard.set;
                tangon = _closure1_slot5;
                zuuluu = _closure1_slot4;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
 183:
                entity = _closure1_slot4;
 187:
                return entity;
            }
        };
        zuuluu['getDeviceMediaPerformanceClass'] = tangon;
        tangon = function() { // Original name: getDeviceModel
            entity = _closure1_slot3;
            entity = entity.deviceModel;
            return entity;
        };
        zuuluu['getDeviceModel'] = tangon;
        tangon = function() { // Original name: getDeviceBrand
            entity = _closure1_slot3;
            entity = entity.deviceBrand;
            return entity;
        };
        zuuluu['getDeviceBrand'] = tangon;
        tangon = function() { // Original name: getDeviceProduct
            entity = _closure1_slot3;
            entity = entity.deviceProduct;
            return entity;
        };
        zuuluu['getDeviceProduct'] = tangon;
        tangon = function() { // Original name: getDeviceManufacturer
            entity = _closure1_slot3;
            entity = entity.deviceManufacturer;
            return entity;
        };
        zuuluu['getDeviceManufacturer'] = tangon;
        tangon = function() { // Original name: getSmallestScreenWidth
            entity = _closure1_slot3;
            entity = entity.smallestScreenWidth;
            return entity;
        };
        zuuluu['getSmallestScreenWidth'] = tangon;
        tangon = function() { // Original name: getSocName
            entity = _closure1_slot3;
            entity = entity.socName;
            return entity;
        };
        zuuluu['getSocName'] = tangon;
        tangon = function() { // Original name: getRamSize
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure1_slot3;
                tangon = entity.ramSize;
                zuuluu = undefined;
                michal = '';
                entity = undefined;
                if(!(michal !== tangon)) { _fun00008_ip = 40; continue _fun00007 }
 27:
                michal = global;
                michal = michal.parseFloat;
                entity = michal.bind(zuuluu)(tangon);
 40:
                return entity;
            }
        };
        zuuluu['getRamSize'] = tangon;
        tangon = function() { // Original name: getMaxCpuFreq
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = _closure1_slot3;
                tangon = entity.maxCpuFreq;
                zuuluu = undefined;
                michal = '';
                entity = undefined;
                if(!(michal !== tangon)) { _fun00010_ip = 40; continue _fun00009 }
 27:
                michal = global;
                michal = michal.parseFloat;
                entity = michal.bind(zuuluu)(tangon);
 40:
                return entity;
            }
        };
        zuuluu['getMaxCpuFreq'] = tangon;
        tangon = function() { // Original name: getTimeZone
            entity = _closure1_slot3;
            entity = entity.timeZone;
            return entity;
        };
        zuuluu['getTimeZone'] = tangon;
        michal = function() { // Original name: getIsRunningOnSimulator
            entity = _closure1_slot3;
            entity = entity.isRunningOnSimulator;
            return entity;
        };
        zuuluu['getIsRunningOnSimulator'] = michal;
        return entity;
    }
})();