// discord_common/js/packages/rn-intl/index.ts
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        option = argBar;
        report = argBaz;
        zuuluu = argFre;
        verify = argPlu;
        var _closure1_slot0 = option;
        var _closure1_slot1 = verify;
        entity = global;
        golfie = entity.Object;
        oscard = golfie.defineProperty;
        tangon = {};
        entity = true;
        tangon['value'] = entity;
        entity = '__esModule';
        entity = oscard.bind(golfie)(zuuluu, entity, tangon);
        foxtra = 0;
        tangon = verify[foxtra];
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        var _closure1_slot2 = tangon;
        romeon = 1;
        tangon = verify[romeon];
        tangon = report.bind(entity)(tangon);
        var _closure1_slot3 = tangon;
        tangon = 2;
        tangon = verify[tangon];
        tangon = option.bind(entity)(tangon);
        tangon = tangon.Platform;
        tangon = 3;
        report = verify[tangon];
        report = option.bind(entity)(report);
        golfie = report.NitroModules;
        oscard = golfie.createHybridObject;
        report = 'AssetLoader';
        oscard = oscard.bind(golfie)(report);
        tangon = verify[tangon];
        tangon = option.bind(entity)(tangon);
        golfie = tangon.NitroModules;
        report = golfie.createHybridObject;
        tangon = 'RNIntlManager';
        report = report.bind(golfie)(tangon);
        michal = function() {
            tangon = _closure1_slot3;
            zuuluu = function() { // Original name: PersistentKeyStore
                zuuluu = this;
                report = _closure1_slot2;
                tangon = _closure2_slot0;
                entity = undefined;
                tangon = report.bind(entity)(zuuluu, tangon);
                tangon = 'persistent_keys';
                zuuluu['storageKey'] = tangon;
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                michal = 4;
                michal = report[michal];
                michal = tangon.bind(entity)(michal);
                michal = michal.MMKV;
                tangon = michal.prototype;
                tangon = Object.create(tangon, {constructor: {value: michal}});
                option = tangon;
                michal = new option[michal](golfie);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['storage'] = michal;
                return entity;
            };
            var _closure2_slot0 = zuuluu;
            entity = {};
            michal = 'loadKeys';
            entity['key'] = michal;
            michal = function() { // Original name: value
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = this;
                    zuuluu = entity.storage;
                    michal = zuuluu.getString;
                    entity = entity.storageKey;
                    tangon = michal.bind(zuuluu)(entity);
                    if(tangon) { _fun00004_ip = 35; continue _fun00003 }
 29:
                    entity = new Array(0);
                    _fun00004_ip = 54; continue _fun00003;
 35:
                    michal = global;
                    zuuluu = michal.JSON;
                    michal = zuuluu.parse;
                    entity = michal.bind(zuuluu)(tangon);
 54:
                    return entity;
                }
            };
            entity['value'] = michal;
            michal = new Array(6);
            michal[0] = entity;
            entity = {};
            oscard = 'saveKeys';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                entity = this;
                tangon = entity.storage;
                zuuluu = tangon.set;
                michal = entity.storageKey;
                entity = global;
                oscard = entity.JSON;
                report = oscard.stringify;
                entity = argFoo;
                entity = report.bind(oscard)(entity);
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            entity['value'] = oscard;
            michal[1] = entity;
            entity = {};
            oscard = 'addKey';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = this;
                    entity = zuuluu.loadKeys;
                    michal = entity.bind(zuuluu)();
                    entity = michal.includes;
                    entity = entity.bind(michal)(tangon);
                    if(entity) { _fun00006_ip = 50; continue _fun00005 }
 29:
                    entity = michal.push;
                    entity = entity.bind(michal)(tangon);
                    entity = zuuluu.saveKeys;
                    entity = entity.bind(zuuluu)(michal);
 50:
                    entity = undefined;
                    return entity;
                }
            };
            entity['value'] = oscard;
            michal[2] = entity;
            entity = {};
            oscard = 'hasKey';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                michal = this;
                entity = michal.loadKeys;
                zuuluu = entity.bind(michal)();
                michal = zuuluu.includes;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity['value'] = oscard;
            michal[3] = entity;
            entity = {};
            oscard = 'removeKey';
            entity['key'] = oscard;
            oscard = function(argFoo) { // Original name: value
                zuuluu = this;
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = zuuluu.loadKeys;
                tangon = michal.bind(zuuluu)();
                michal = tangon.filter;
                entity = function(argFoo) {
                    michal = _closure3_slot0;
                    entity = argFoo;
                    entity = entity !== michal;
                    return entity;
                };
                michal = michal.bind(tangon)(entity);
                entity = zuuluu.saveKeys;
                entity = entity.bind(zuuluu)(michal);
                entity = undefined;
                return entity;
            };
            entity['value'] = oscard;
            michal[4] = entity;
            entity = {};
            oscard = 'clearAllAndReturnList';
            entity['key'] = oscard;
            report = function() { // Original name: value
                michal = this;
                entity = michal.loadKeys;
                entity = entity.bind(michal)();
                tangon = michal.storage;
                zuuluu = tangon.delete;
                michal = michal.storageKey;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['value'] = report;
            michal[5] = entity;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        tangon = michal.bind(entity)();
        michal = tangon.prototype;
        golfie = Object.create(michal, {constructor: {value: tangon}});
        echoed = golfie;
        michal = new echoed[tangon](result);
        michal = michal instanceof Object ? michal : golfie;
        golfie = michal.clearAllAndReturnList;
        output = golfie.bind(michal)();
        yankee = new Array(0);
        result = yankee;
        sizing = 0;
        sizing = arraySpread(result, output, sizing);
        output = ['intl_messages_internationalcompiledmessages', 'intl_messages_untranslatedcompiledmessages', 'intl_messages_enuscompiledmessages'];
        result = yankee;
        golfie = arraySpread(result, output, sizing);
        golfie = yankee.sort;
        golfie = golfie.bind(yankee)();
        golfie = yankee.length;
        golfie = foxtra < golfie;
        offset = 0;
        if(!golfie) { _fun00002_ip = 315; continue _fun00001 }
 261:
        golfie = offset > foxtra;
        if(!golfie) { _fun00002_ip = 284; continue _fun00001 }
 268:
        kiloes = yankee[offset];
        backup = offset - romeon;
        backup = yankee[backup];
        golfie = kiloes === backup;
 284:
        if(golfie) { _fun00002_ip = 303; continue _fun00001 }
 287:
        backup = report.preload;
        golfie = yankee[offset];
        golfie = backup.bind(report)(golfie, oscard);
 303:
        offset = offset + 1;
        golfie = yankee.length;
        if(offset < golfie) { _fun00002_ip = 261; continue _fun00001 }
 315:
        golfie = 5;
        golfie = verify[golfie];
        verify = option.bind(entity)(golfie);
        option = verify.fileFinishedImporting;
        golfie = '../discord_common/js/packages/rn-intl/index.ts';
        golfie = option.bind(verify)(golfie);
        zuuluu['AssetLoader'] = oscard;
        zuuluu['RNIntlManager'] = report;
        zuuluu['PersistentKeyStore'] = tangon;
        zuuluu['persistentKeyStore'] = michal;
        return entity;
    }
})();