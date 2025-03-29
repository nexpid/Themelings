// app/modules/device/DeviceState.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 1;
    tangon = oscard[entity];
    entity = undefined;
    option = report.bind(entity)(tangon);
    golfie = option.fileFinishedImporting;
    tangon = 'modules/device/DeviceState.tsx';
    tangon = golfie.bind(option)(tangon);
    tangon = 2;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.DeviceState;
    zuuluu['DeviceState'] = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ThermalState;
    zuuluu['ThermalState'] = tangon;
    tangon = 0;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getDeviceState;
    zuuluu['getDeviceState'] = tangon;
    michal = function(argFoo) { // Original name: logDeviceState
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal === entity)) { _fun00002_ip = 60; continue _fun00001 }
 9:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 0;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            tangon = michal.logger;
            zuuluu = tangon.info;
            michal = 'Device state not available';
            michal = zuuluu.bind(tangon)(michal);
            _fun00002_ip = 278; continue _fun00001;
 60:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 0;
            oscard = report[michal];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(oscard);
            option = oscard.logger;
            golfie = option.info;
            oscard = 'Device State Information:';
            oscard = golfie.bind(option)(oscard);
            oscard = report[michal];
            oscard = tangon.bind(zuuluu)(oscard);
            verify = oscard.logger;
            option = verify.info;
            yankee = entity.thermalState;
            oscard = global;
            golfie = oscard.HermesInternal;
            offset = golfie.concat;
            golfie = '- Thermal State: ';
            golfie = offset.bind(golfie)(yankee);
            golfie = option.bind(verify)(golfie);
            golfie = report[michal];
            golfie = tangon.bind(zuuluu)(golfie);
            option = golfie.logger;
            golfie = option.info;
            offset = entity.batteryLevel;
            verify = 100;
            yankee = verify * offset;
            oscard = oscard.HermesInternal;
            offset = oscard.concat;
            verify = '- Battery Level: ';
            oscard = '%';
            oscard = offset.bind(verify)(yankee, oscard);
            oscard = golfie.bind(option)(oscard);
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            zuuluu = michal.logger;
            michal = zuuluu.info;
            entity = entity.isLowPowerMode;
            tangon = 'Disabled';
            if(!entity) { _fun00002_ip = 263; continue _fun00001 }
 259:
            tangon = 'Enabled';
 263:
            entity = '- Low Power Mode: ';
            entity = entity + tangon;
            entity = michal.bind(zuuluu)(entity);
 278:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['logDeviceState'] = michal;
    return entity;
})();