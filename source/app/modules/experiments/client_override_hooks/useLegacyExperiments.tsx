// app/modules/experiments/client_override_hooks/useLegacyExperiments.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: bucketVariantType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot6;
            entity = entity.CONTROL;
            if(!(zuuluu !== entity)) { _fun00002_ip = 106; continue _fun00001 }
 20:
            entity = _closure1_slot6;
            entity = entity.NOT_ELIGIBLE;
            if(!(zuuluu !== entity)) { _fun00002_ip = 70; continue _fun00001 }
 34:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = entity.Variant_Type;
            entity = entity.TREATMENT;
            _fun00002_ip = 104; continue _fun00001;
 70:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 4;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            zuuluu = zuuluu.Variant_Type;
            entity = zuuluu.UNSPECIFIED;
 104:
            _fun00002_ip = 140; continue _fun00001;
 106:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 4;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.Variant_Type;
            entity = michal.CONTROL;
 140:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useMemo;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ExperimentBuckets;
    var _closure1_slot6 = golfie;
    tangon = tangon.ExperimentTypes;
    var _closure1_slot7 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/client_override_hooks/useLegacyExperiments.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useLegacyExperiments
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        oscard = 5;
        entity = option[oscard];
        report = undefined;
        yankee = golfie.bind(report)(entity);
        offset = yankee.useStateFromStoresObject;
        entity = _closure1_slot5;
        verify = new Array(1);
        verify[0] = entity;
        zuuluu = function() {
            michal = _closure1_slot5;
            entity = michal.getRegisteredExperiments;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = offset.bind(yankee)(verify, zuuluu);
        var _closure2_slot0 = zuuluu;
        oscard = option[oscard];
        option = golfie.bind(report)(oscard);
        golfie = option.useStateFromStoresObject;
        oscard = new Array(1);
        oscard[0] = entity;
        entity = function() {
            michal = _closure1_slot5;
            entity = michal.getAllExperimentOverrideDescriptors;
            entity = entity.bind(michal)();
            return entity;
        };
        oscard = golfie.bind(option)(oscard, entity);
        var _closure2_slot1 = oscard;
        entity = {};
        tangon = _closure1_slot4;
        golfie = new Array(1);
        golfie[0] = zuuluu;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = {};
                var _closure3_slot0 = entity;
                offset = function(argFoo) { // Original name: _loop
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        oscard = argFoo;
                        var _closure4_slot0 = oscard;
                        tangon = _closure3_slot0;
                        zuuluu = _closure3_slot1;
                        michal = {};
                        offset = _closure1_slot0;
                        verify = _closure1_slot2;
                        entity = 6;
                        verify = verify[entity];
                        entity = undefined;
                        verify = offset.bind(entity)(verify);
                        verify = verify.ExperimentSystem;
                        verify = verify.LEGACY;
                        michal['system'] = verify;
                        offset = oscard.type;
                        option = _closure1_slot7;
                        verify = option.USER;
                        option = 'guild';
                        if(!(offset === verify)) { _fun00006_ip = 91; continue _fun00005 }
 87:
                        option = 'user';
 91:
                        michal['kind'] = option;
                        golfie = _closure3_slot1;
                        michal['name'] = golfie;
                        golfie = oscard.title;
                        michal['title'] = golfie;
                        golfie = oscard.buckets;
                        oscard = golfie.map;
                        report = function(argFoo, argBar) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                tangon = argFoo;
                                entity = {};
                                michal = tangon.valueOf;
                                michal = michal.bind(tangon)();
                                entity['id'] = michal;
                                michal = _closure4_slot0;
                                michal = michal.description;
                                report = 'object';
                                michal = typeof michal;
                                if(!(report !== michal)) { _fun00008_ip = 79; continue _fun00007 }
 41:
                                oscard = _closure1_slot1;
                                report = _closure1_slot2;
                                michal = 7;
                                report = report[michal];
                                michal = undefined;
                                report = oscard.bind(michal)(report);
                                michal = report.getExperimentBucketName;
                                michal = michal.bind(report)(tangon);
                                _fun00008_ip = 95; continue _fun00007;
 79:
                                zuuluu = _closure4_slot0;
                                report = zuuluu.description;
                                zuuluu = argBar;
                                michal = report[zuuluu];
 95:
                                entity['label'] = michal;
                                oscard = _closure1_slot1;
                                report = _closure1_slot2;
                                zuuluu = 7;
                                report = report[zuuluu];
                                zuuluu = undefined;
                                oscard = oscard.bind(zuuluu)(report);
                                report = oscard.getExperimentBucketName;
                                report = report.bind(oscard)(tangon);
                                entity['shortLabel'] = report;
                                michal = _closure1_slot8;
                                michal = michal.bind(zuuluu)(tangon);
                                entity['type'] = michal;
                                return entity;
                            }
                        };
                        report = oscard.bind(golfie)(report);
                        michal['variants'] = report;
                        tangon[zuuluu] = michal;
                        return entity;
                    }
                };
                michal = global;
                tangon = michal.Object;
                zuuluu = tangon.entries;
                michal = _closure2_slot0;
                verify = zuuluu.bind(tangon)(michal);
                michal = verify.length;
                option = 0;
                michal = option < michal;
                oscard = undefined;
                report = 2;
                tangon = 1;
                zuuluu = 0;
                if(!michal) { _fun00004_ip = 111; continue _fun00003 }
 68:
                romeon = verify[zuuluu];
                michal = _closure1_slot3;
                michal = michal.bind(oscard)(romeon, report);
                romeon = michal[option];
                var _closure3_slot1 = romeon;
                michal = michal[tangon];
                michal = offset.bind(oscard)(michal);
                zuuluu = zuuluu + 1;
                michal = verify.length;
                if(zuuluu < michal) { _fun00004_ip = 68; continue _fun00003 }
 111:
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(zuuluu, golfie);
        entity['experiments'] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = {};
                michal = global;
                tangon = michal.Object;
                zuuluu = tangon.entries;
                michal = _closure2_slot1;
                verify = zuuluu.bind(tangon)(michal);
                michal = verify.length;
                option = 0;
                michal = option < michal;
                oscard = undefined;
                report = 2;
                tangon = 1;
                zuuluu = 0;
                if(!michal) { _fun00010_ip = 125; continue _fun00009 }
 55:
                offset = verify[zuuluu];
                michal = _closure1_slot3;
                michal = michal.bind(oscard)(offset, report);
                offset = michal[option];
                yankee = michal[tangon];
                michal = {};
                michal['experimentId'] = offset;
                foxtra = yankee.bucket;
                romeon = foxtra.valueOf;
                romeon = romeon.bind(foxtra)();
                michal['variantId'] = romeon;
                michal['originalDescriptor'] = yankee;
                entity[offset] = michal;
                zuuluu = zuuluu + 1;
                michal = verify.length;
                if(zuuluu < michal) { _fun00010_ip = 55; continue _fun00009 }
 125:
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['overridesInfo'] = michal;
        return entity;
    };
    zuuluu['useLegacyExperiments'] = michal;
    return entity;
})();