// app/modules/experiments/client_override_hooks/useApexExperiments.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.useEffect;
    var _closure1_slot3 = option;
    tangon = tangon.useMemo;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/client_override_hooks/useApexExperiments.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useApexExperiments
        oscard = _closure1_slot3;
        report = undefined;
        zuuluu = function() {
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 3;
            michal = oscard[entity];
            entity = undefined;
            tangon = report.bind(entity)(michal);
            zuuluu = tangon.fetchApexExperimentsMetadata;
            michal = 4;
            michal = oscard[michal];
            michal = report.bind(entity)(michal);
            michal = michal.Experiment_Surface;
            michal = michal.APP;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = new Array(0);
        entity = oscard.bind(report)(zuuluu, entity);
        golfie = _closure1_slot0;
        option = _closure1_slot1;
        oscard = 5;
        entity = option[oscard];
        yankee = golfie.bind(report)(entity);
        offset = yankee.useStateFromStores;
        entity = _closure1_slot5;
        verify = new Array(1);
        verify[0] = entity;
        zuuluu = function() {
            michal = _closure1_slot5;
            entity = michal.getExperimentsMetadata;
            entity = entity.bind(michal)();
            return entity;
        };
        offset = offset.bind(yankee)(verify, zuuluu);
        var _closure2_slot0 = offset;
        zuuluu = option[oscard];
        romeon = golfie.bind(report)(zuuluu);
        yankee = romeon.useStateFromStores;
        verify = new Array(1);
        verify[0] = entity;
        zuuluu = function() {
            michal = _closure1_slot5;
            entity = michal.getRegisteredExperiments;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu = yankee.bind(romeon)(verify, zuuluu);
        var _closure2_slot1 = zuuluu;
        tangon = _closure1_slot4;
        verify = new Array(2);
        verify[0] = offset;
        verify[1] = zuuluu;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = {};
                romeon = global;
                report = romeon.Object;
                tangon = report.entries;
                zuuluu = _closure2_slot0;
                sizing = tangon.bind(report)(zuuluu);
                zuuluu = sizing.length;
                yankee = 0;
                zuuluu = yankee < zuuluu;
                kiloes = 'user';
                verify = undefined;
                option = 2;
                golfie = 1;
                oscard = 6;
                backup = 7;
                report = 'guild';
                tangon = 0;
                if(!zuuluu) { _fun00002_ip = 238; continue _fun00001 }
 74:
                output = sizing[tangon];
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu.bind(verify)(output, option);
                output = zuuluu[yankee];
                result = zuuluu[golfie];
                zuuluu = {};
                update = _closure1_slot0;
                echoed = _closure1_slot1;
                source = echoed[oscard];
                source = update.bind(verify)(source);
                source = source.ExperimentSystem;
                source = source.APEX;
                zuuluu['system'] = source;
                source = result.unitType;
                echoed = echoed[backup];
                echoed = update.bind(verify)(echoed);
                echoed = echoed.UnitType;
                update = echoed.User;
                echoed = report;
                if(!(source === update)) { _fun00002_ip = 169; continue _fun00001 }
 166:
                echoed = kiloes;
 169:
                zuuluu['kind'] = echoed;
                echoed = result.name;
                zuuluu['name'] = echoed;
                echoed = result.title;
                zuuluu['title'] = echoed;
                update = result.variants;
                echoed = update.map;
                result = function(argFoo) {
                    michal = argFoo;
                    entity = {};
                    zuuluu = michal.id;
                    entity['id'] = zuuluu;
                    option = michal.id;
                    golfie = michal.label;
                    zuuluu = global;
                    tangon = zuuluu.HermesInternal;
                    oscard = tangon.concat;
                    report = 'Variant ';
                    tangon = ': ';
                    tangon = oscard.bind(report)(option, tangon, golfie);
                    entity['label'] = tangon;
                    tangon = michal.id;
                    zuuluu = zuuluu.HermesInternal;
                    zuuluu = zuuluu.concat;
                    zuuluu = zuuluu.bind(report)(tangon);
                    entity['shortLabel'] = zuuluu;
                    michal = michal.type;
                    entity['type'] = michal;
                    return entity;
                };
                result = echoed.bind(update)(result);
                zuuluu['variants'] = result;
                entity[output] = zuuluu;
                tangon = tangon + 1;
                zuuluu = sizing.length;
                if(tangon < zuuluu) { _fun00002_ip = 74; continue _fun00001 }
 238:
                tangon = romeon.Object;
                zuuluu = tangon.entries;
                michal = _closure2_slot1;
                report = zuuluu.bind(tangon)(michal);
                michal = report.length;
                michal = yankee < michal;
                tangon = null;
                zuuluu = 0;
                if(!michal) { _fun00002_ip = 435; continue _fun00001 }
 278:
                backup = report[zuuluu];
                michal = _closure1_slot2;
                michal = michal.bind(verify)(backup, option);
                backup = michal[yankee];
                kiloes = michal[golfie];
                michal = entity[backup];
                if(!(tangon == michal)) { _fun00002_ip = 420; continue _fun00001 }
 308:
                michal = {};
                output = _closure1_slot0;
                sizing = _closure1_slot1;
                sizing = sizing[oscard];
                sizing = output.bind(verify)(sizing);
                sizing = sizing.ExperimentSystem;
                sizing = sizing.APEX;
                michal['system'] = sizing;
                sizing = kiloes.kind;
                michal['kind'] = sizing;
                sizing = kiloes.name;
                michal['name'] = sizing;
                sizing = kiloes.name;
                michal['title'] = sizing;
                output = romeon.Object;
                sizing = output.entries;
                kiloes = kiloes.variations;
                output = sizing.bind(output)(kiloes);
                sizing = output.map;
                kiloes = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        entity = zuuluu[Symbol.iterator];
                        zuuluu = entity().next;
                        oscard = zuuluu().value;
                        michal = entity;
                        tangon = undefined;
                        michal = michal === tangon;
                        report = undefined;
                        if(michal) { _fun00004_ip = 27; continue _fun00003 }
 24:
                        report = oscard;
 27:
                        if(michal) { _fun00004_ip = 41; continue _fun00003 }
 30:
                        zuuluu = zuuluu().value;
                        zuuluu = entity;
                        michal = zuuluu === tangon;
 41:
                        if(michal) { _fun00004_ip = 47; continue _fun00003 }
 44:
                        entity.return();
 47:
                        entity = {};
                        michal = global;
                        zuuluu = michal.Number;
                        zuuluu = zuuluu.bind(tangon)(report);
                        entity['id'] = zuuluu;
                        zuuluu = michal.HermesInternal;
                        oscard = zuuluu.concat;
                        zuuluu = 'Variant ';
                        oscard = oscard.bind(zuuluu)(report);
                        entity['label'] = oscard;
                        michal = michal.HermesInternal;
                        michal = michal.concat;
                        michal = michal.bind(zuuluu)(report);
                        entity['shortLabel'] = michal;
                        zuuluu = _closure1_slot0;
                        report = _closure1_slot1;
                        michal = 4;
                        michal = report[michal];
                        michal = zuuluu.bind(tangon)(michal);
                        michal = michal.Variant_Type;
                        michal = michal.UNSPECIFIED;
                        entity['type'] = michal;
                        return entity;
                    }
                };
                kiloes = sizing.bind(output)(kiloes);
                michal['variants'] = kiloes;
                entity[backup] = michal;
 420:
                zuuluu = zuuluu + 1;
                michal = report.length;
                if(zuuluu < michal) { _fun00002_ip = 278; continue _fun00001 }
 435:
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(zuuluu, verify);
        oscard = option[oscard];
        option = golfie.bind(report)(oscard);
        golfie = option.useStateFromStores;
        oscard = new Array(1);
        oscard[0] = entity;
        entity = function() {
            michal = _closure1_slot5;
            entity = michal.getClientOverrides;
            entity = entity.bind(michal)();
            return entity;
        };
        oscard = golfie.bind(option)(oscard, entity);
        var _closure2_slot2 = oscard;
        entity = {};
        entity['experiments'] = zuuluu;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = {};
                michal = global;
                tangon = michal.Object;
                zuuluu = tangon.entries;
                michal = _closure2_slot2;
                verify = zuuluu.bind(tangon)(michal);
                michal = verify.length;
                option = 0;
                michal = option < michal;
                oscard = undefined;
                report = 2;
                tangon = 1;
                zuuluu = 0;
                if(!michal) { _fun00006_ip = 116; continue _fun00005 }
 55:
                offset = verify[zuuluu];
                michal = _closure1_slot2;
                michal = michal.bind(oscard)(offset, report);
                offset = michal[option];
                yankee = michal[tangon];
                michal = {};
                michal['experimentId'] = offset;
                romeon = yankee.variantId;
                michal['variantId'] = romeon;
                michal['originalDescriptor'] = yankee;
                entity[offset] = michal;
                zuuluu = zuuluu + 1;
                michal = verify.length;
                if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 116:
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['overridesInfo'] = michal;
        return entity;
    };
    zuuluu['useApexExperiments'] = michal;
    return entity;
})();