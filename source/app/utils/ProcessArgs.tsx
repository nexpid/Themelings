// app/utils/ProcessArgs.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    michal = function() {
        report = function() { // Original name: ProcessArgs
            tangon = _closure1_slot2;
            zuuluu = _closure2_slot0;
            entity = undefined;
            michal = this;
            michal = tangon.bind(entity)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        entity = {};
        zuuluu = 'get';
        entity['key'] = zuuluu;
        zuuluu = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                michal = michal.cached;
                tangon = null;
                if(!(tangon == michal)) { _fun00002_ip = 163; continue _fun00001 }
 22:
                report = _closure1_slot0;
                michal = _closure1_slot1;
                golfie = 2;
                michal = michal[golfie];
                oscard = undefined;
                michal = report.bind(oscard)(michal);
                report = tangon == michal;
                michal = undefined;
                if(report) { _fun00002_ip = 113; continue _fun00001 }
 56:
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[golfie];
                zuuluu = report.bind(oscard)(zuuluu);
                report = zuuluu.processUtils;
                zuuluu = tangon == report;
                michal = undefined;
                if(zuuluu) { _fun00002_ip = 113; continue _fun00001 }
 88:
                zuuluu = report.getMainArgvSync;
                zuuluu = tangon == zuuluu;
                michal = undefined;
                if(zuuluu) { _fun00002_ip = 113; continue _fun00001 }
 103:
                zuuluu = report.getMainArgvSync;
                michal = zuuluu.bind(report)();
 113:
                zuuluu = tangon != michal;
                if(!zuuluu) { _fun00002_ip = 132; continue _fun00001 }
 120:
                oscard = michal.length;
                report = 1;
                zuuluu = oscard > report;
 132:
                if(!zuuluu) { _fun00002_ip = 145; continue _fun00001 }
 135:
                zuuluu = michal.shift;
                zuuluu = zuuluu.bind(michal)();
 145:
                zuuluu = _closure2_slot0;
                if(!(tangon == michal)) { _fun00002_ip = 157; continue _fun00001 }
 153:
                michal = new Array(0);
 157:
                zuuluu['cached'] = michal;
 163:
                entity = _closure2_slot0;
                entity = entity.cached;
                return entity;
            }
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(6);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'contains';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = _closure2_slot0;
            entity = michal.get;
            zuuluu = entity.bind(michal)();
            michal = zuuluu.includes;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'isEnvVariableTrue';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure1_slot0;
                entity = _closure1_slot1;
                oscard = 2;
                entity = entity[oscard];
                tangon = undefined;
                entity = michal.bind(tangon)(entity);
                if(!(tangon !== entity)) { _fun00004_ip = 137; continue _fun00003 }
 29:
                michal = _closure1_slot0;
                entity = _closure1_slot1;
                entity = entity[oscard];
                michal = michal.bind(tangon)(entity);
                entity = null;
                report = entity == michal;
                michal = undefined;
                if(report) { _fun00004_ip = 111; continue _fun00003 }
 57:
                report = _closure1_slot0;
                zuuluu = _closure1_slot1;
                zuuluu = zuuluu[oscard];
                zuuluu = report.bind(tangon)(zuuluu);
                zuuluu = zuuluu.process;
                report = entity == zuuluu;
                michal = undefined;
                if(report) { _fun00004_ip = 111; continue _fun00003 }
 89:
                zuuluu = zuuluu.env;
                entity = entity == zuuluu;
                michal = undefined;
                if(entity) { _fun00004_ip = 111; continue _fun00003 }
 104:
                entity = argFoo;
                michal = zuuluu[entity];
 111:
                entity = '1';
                if(!(entity !== michal)) { _fun00004_ip = 133; continue _fun00003 }
 121:
                entity = 'true';
                if(!(entity !== michal)) { _fun00004_ip = 133; continue _fun00003 }
 129:
                entity = false;
                return entity;
 133:
                entity = true;
                return entity;
 137:
                entity = false;
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'isDisallowPopupsSet';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure2_slot0;
                zuuluu = tangon.contains;
                entity = '--disallow-popups';
                entity = zuuluu.bind(tangon)(entity);
                if(entity) { _fun00006_ip = 48; continue _fun00005 }
 27:
                tangon = _closure2_slot0;
                zuuluu = tangon.isEnvVariableTrue;
                michal = 'DISCORD_DISALLOW_POPUPS';
                entity = zuuluu.bind(tangon)(michal);
 48:
                return entity;
            }
        };
        entity['value'] = oscard;
        zuuluu[3] = entity;
        entity = {};
        oscard = 'isDiscordTestSet';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = _closure2_slot0;
            michal = zuuluu.isEnvVariableTrue;
            entity = 'DISCORD_TEST';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[4] = entity;
        entity = {};
        oscard = 'isDiscordGatewayPlaintextSet';
        entity['key'] = oscard;
        michal = function() { // Original name: value
            entity = false;
            return entity;
        };
        entity['value'] = michal;
        zuuluu[5] = entity;
        michal = undefined;
        entity = null;
        entity = tangon.bind(michal)(report, entity, zuuluu);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/ProcessArgs.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['ProcessArgs'] = michal;
    return entity;
})();