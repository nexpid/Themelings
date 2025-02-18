// app/modules/experiments/createExperiment.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: getExperimentDescriptor
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argBar;
            michal = 'guild';
            entity = argFoo;
            if(!(michal !== entity)) { _fun00002_ip = 34; continue _fun00001 }
 14:
            michal = _closure1_slot7;
            entity = michal.getUserExperimentDescriptor;
            entity = entity.bind(michal)(report);
            _fun00002_ip = 61; continue _fun00001;
 34:
            tangon = _closure1_slot7;
            zuuluu = tangon.getGuildExperimentDescriptor;
            michal = argBaz;
            michal = michal.guildId;
            entity = zuuluu.bind(tangon)(report, michal);
 61:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: getConfig
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = argBaz;
            entity = argCor;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00004_ip = 24; continue _fun00003 }
 15:
            entity = entity.aaMode;
            if(entity) { _fun00004_ip = 63; continue _fun00003 }
 24:
            tangon = report.get;
            entity = argBar;
            tangon = tangon.bind(report)(entity);
            report = zuuluu == tangon;
            entity = undefined;
            if(report) { _fun00004_ip = 51; continue _fun00003 }
 46:
            entity = tangon.config;
 51:
            if(!(zuuluu == entity)) { _fun00004_ip = 61; continue _fun00003 }
 55:
            entity = michal.defaultConfig;
 61:
            _fun00004_ip = 69; continue _fun00003;
 63:
            entity = michal.defaultConfig;
 69:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    option = tangon.useState;
    var _closure1_slot4 = option;
    tangon = tangon.useEffect;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ExperimentBuckets;
    var _closure1_slot8 = golfie;
    tangon = tangon.ExposureTypes;
    var _closure1_slot9 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/createExperiment.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: createExperiment
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            entity = function(argFoo) { // Original name: trackAutoExposure
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    tangon = arguments[1];
                    zuuluu = arguments[3];
                    entity = undefined;
                    if(!(tangon === entity)) { _fun00008_ip = 17; continue _fun00007 }
 15:
                    tangon = {};
 17:
                    if(!(zuuluu === entity)) { _fun00008_ip = 23; continue _fun00007 }
 21:
                    zuuluu = null;
 23:
                    oscard = _closure1_slot9;
                    michal = arguments[2];
                    if(michal) { _fun00008_ip = 44; continue _fun00007 }
 36:
                    michal = oscard.AUTO;
                    _fun00008_ip = 50; continue _fun00007;
 44:
                    michal = oscard.AUTO_FALLBACK;
 50:
                    tangon['exposureType'] = michal;
                    michal = false;
                    tangon['excluded'] = michal;
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00008_ip = 85; continue _fun00007 }
 70:
                    michal = _closure2_slot4;
                    michal = michal.bind(entity)(report, tangon);
                    _fun00008_ip = 99; continue _fun00007;
 85:
                    michal = _closure2_slot5;
                    michal = michal.bind(entity)(report, tangon, zuuluu);
 99:
                    return entity;
                }
            };
            var _closure2_slot3 = entity;
            tangon = function(argFoo) { // Original name: trackExposure
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    tangon = arguments[1];
                    entity = undefined;
                    if(!(tangon === entity)) { _fun00010_ip = 42; continue _fun00009 }
 12:
                    michal = {};
                    zuuluu = false;
                    michal['excluded'] = zuuluu;
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.MANUAL;
                    michal['exposureType'] = zuuluu;
                    tangon = michal;
 42:
                    golfie = _closure1_slot10;
                    zuuluu = _closure2_slot0;
                    oscard = zuuluu.kind;
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.id;
                    zuuluu = golfie.bind(entity)(oscard, zuuluu, report);
                    oscard = null;
                    if(!(oscard != zuuluu)) { _fun00010_ip = 94; continue _fun00009 }
 83:
                    michal = _closure2_slot5;
                    michal = michal.bind(entity)(report, tangon, zuuluu);
 94:
                    return entity;
                }
            };
            var _closure2_slot4 = tangon;
            entity = function(argFoo, argBar, argBaz) { // Original name: trackExposureWithDescriptor
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    yankee = argFoo;
                    verify = argBar;
                    report = argBaz;
                    option = null;
                    if(!(option != report)) { _fun00012_ip = 242; continue _fun00011 }
 18:
                    entity = _closure1_slot9;
                    oscard = entity.MANUAL;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 5;
                    entity = zuuluu[entity];
                    golfie = undefined;
                    tangon = michal.bind(golfie)(entity);
                    zuuluu = tangon.trackExposureToExperiment;
                    entity = _closure2_slot2;
                    michal = entity.id;
                    entity = {};
                    foxtra = option == yankee;
                    romeon = undefined;
                    if(foxtra) { _fun00012_ip = 87; continue _fun00011 }
 82:
                    romeon = yankee.location;
 87:
                    foxtra = option != romeon;
                    yankee = 'unknown';
                    if(!foxtra) { _fun00012_ip = 101; continue _fun00011 }
 98:
                    yankee = romeon;
 101:
                    entity['location'] = yankee;
                    romeon = option == verify;
                    yankee = undefined;
                    if(romeon) { _fun00012_ip = 120; continue _fun00011 }
 114:
                    yankee = verify.analyticsLocations;
 120:
                    if(!(option == yankee)) { _fun00012_ip = 128; continue _fun00011 }
 124:
                    yankee = new Array(0);
 128:
                    entity['analyticsLocations'] = yankee;
                    romeon = option == verify;
                    yankee = undefined;
                    if(romeon) { _fun00012_ip = 148; continue _fun00011 }
 142:
                    yankee = verify.fingerprint;
 148:
                    if(!(option == yankee)) { _fun00012_ip = 166; continue _fun00011 }
 152:
                    romeon = _closure1_slot6;
                    offset = romeon.getFingerprint;
                    yankee = offset.bind(romeon)();
 166:
                    romeon = option != yankee;
                    offset = undefined;
                    if(!romeon) { _fun00012_ip = 178; continue _fun00011 }
 175:
                    offset = yankee;
 178:
                    entity['fingerprint'] = offset;
                    yankee = option == verify;
                    offset = undefined;
                    if(yankee) { _fun00012_ip = 198; continue _fun00011 }
 192:
                    offset = verify.excluded;
 198:
                    if(offset) { _fun00012_ip = 203; continue _fun00011 }
 201:
                    offset = false;
 203:
                    entity['excluded'] = offset;
                    offset = option == verify;
                    golfie = undefined;
                    if(offset) { _fun00012_ip = 223; continue _fun00011 }
 217:
                    golfie = verify.exposureType;
 223:
                    if(!(option != golfie)) { _fun00012_ip = 230; continue _fun00011 }
 227:
                    oscard = golfie;
 230:
                    entity['exposureType'] = oscard;
                    entity = zuuluu.bind(tangon)(michal, report, entity);
 242:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot5 = entity;
            report = function(argFoo, argBar) { // Original name: subscribe
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    romeon = argFoo;
                    option = argBar;
                    michal = arguments[2];
                    var _closure3_slot0 = romeon;
                    var _closure3_slot1 = option;
                    golfie = undefined;
                    if(!(michal === golfie)) { _fun00014_ip = 27; continue _fun00013 }
 25:
                    michal = {};
 27:
                    var _closure3_slot2 = golfie;
                    var _closure3_slot3 = golfie;
                    var _closure3_slot4 = golfie;
                    tangon = function() { // Original name: onStoreChange
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            option = _closure1_slot10;
                            entity = _closure2_slot0;
                            oscard = entity.kind;
                            tangon = entity.id;
                            michal = _closure3_slot0;
                            entity = undefined;
                            verify = option.bind(entity)(oscard, tangon, michal);
                            michal = null;
                            if(!(michal != verify)) { _fun00016_ip = 61; continue _fun00015 }
 46:
                            tangon = _closure3_slot2;
                            if(tangon) { _fun00016_ip = 61; continue _fun00015 }
 53:
                            tangon = verify.bucket;
                            _fun00016_ip = 71; continue _fun00015;
 61:
                            oscard = _closure1_slot8;
                            tangon = oscard.NOT_ELIGIBLE;
 71:
                            oscard = michal == verify;
                            michal = -1;
                            if(oscard) { _fun00016_ip = 90; continue _fun00015 }
 84:
                            michal = verify.revision;
 90:
                            oscard = _closure3_slot3;
                            oscard = tangon === oscard;
                            if(!oscard) { _fun00016_ip = 109; continue _fun00015 }
 101:
                            option = _closure3_slot4;
                            oscard = option === michal;
 109:
                            if(oscard) { _fun00016_ip = 155; continue _fun00015 }
 112:
                            oscard = _closure3_slot1;
                            option = _closure1_slot11;
                            foxtra = _closure2_slot0;
                            yankee = _closure2_slot1;
                            backup = undefined;
                            romeon = tangon;
                            offset = verify;
                            report = backup[option](foxtra, romeon, yankee, offset, verify);
                            report = oscard.bind(entity)(report, tangon, michal);
                            _closure3_slot3 = tangon;
                            _closure3_slot4 = michal;
 155:
                            return entity;
                        }
                    };
                    var _closure3_slot5 = tangon;
                    zuuluu = michal.disable;
                    report = null;
                    oscard = report != zuuluu;
                    if(!oscard) { _fun00014_ip = 69; continue _fun00013 }
 63:
                    oscard = michal.disable;
 69:
                    _closure3_slot2 = oscard;
                    yankee = _closure1_slot10;
                    verify = _closure2_slot0;
                    offset = verify.kind;
                    verify = verify.id;
                    offset = yankee.bind(golfie)(offset, verify, romeon);
                    if(!(report != offset)) { _fun00014_ip = 119; continue _fun00013 }
 108:
                    if(oscard) { _fun00014_ip = 119; continue _fun00013 }
 111:
                    oscard = offset.bucket;
                    _fun00014_ip = 129; continue _fun00013;
 119:
                    verify = _closure1_slot8;
                    oscard = verify.NOT_ELIGIBLE;
 129:
                    _closure3_slot3 = oscard;
                    oscard = report == offset;
                    report = -1;
                    if(oscard) { _fun00014_ip = 152; continue _fun00013 }
 146:
                    report = offset.revision;
 152:
                    _closure3_slot4 = report;
                    verify = _closure1_slot11;
                    sizing = _closure2_slot0;
                    kiloes = _closure3_slot3;
                    backup = _closure2_slot1;
                    output = undefined;
                    foxtra = offset;
                    oscard = output[verify](sizing, kiloes, backup, foxtra, romeon);
                    report = _closure3_slot3;
                    zuuluu = _closure3_slot4;
                    zuuluu = option.bind(golfie)(oscard, report, zuuluu);
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.addReactChangeListener;
                    michal = michal.bind(zuuluu)(tangon);
                    entity = function() {
                        zuuluu = _closure1_slot7;
                        michal = zuuluu.removeReactChangeListener;
                        entity = _closure3_slot5;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            var _closure2_slot6 = report;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 6;
            entity = option[entity];
            verify = undefined;
            yankee = golfie.bind(verify)(entity);
            offset = yankee.validateOneExperiment;
            option = zuuluu.id;
            golfie = zuuluu.label;
            entity = zuuluu.commonTriggerPoint;
            entity = offset.bind(yankee)(option, golfie, entity);
            entity = global;
            entity = entity.Map;
            golfie = entity.prototype;
            golfie = Object.create(golfie, {constructor: {value: entity}});
            output = golfie;
            entity = new output[entity](sizing);
            offset = entity instanceof Object ? entity : golfie;
            var _closure2_slot1 = offset;
            yankee = offset.set;
            entity = _closure1_slot8;
            option = entity.NOT_ELIGIBLE;
            golfie = {};
            romeon = 'Not Eligible';
            golfie['description'] = romeon;
            romeon = zuuluu.defaultConfig;
            golfie['config'] = romeon;
            golfie = yankee.bind(offset)(option, golfie);
            option = offset.set;
            golfie = entity.CONTROL;
            entity = {};
            yankee = 'Control Bucket';
            entity['description'] = yankee;
            yankee = zuuluu.defaultConfig;
            entity['config'] = yankee;
            entity = option.bind(offset)(golfie, entity);
            option = zuuluu.treatments;
            golfie = option.forEach;
            entity = function(argFoo) {
                report = argFoo;
                tangon = _closure2_slot1;
                zuuluu = tangon.set;
                michal = report.id;
                entity = {};
                offset = report.id;
                verify = report.label;
                oscard = global;
                oscard = oscard.HermesInternal;
                option = oscard.concat;
                golfie = 'Treatment ';
                oscard = ': ';
                oscard = option.bind(golfie)(offset, oscard, verify);
                entity['description'] = oscard;
                report = report.config;
                entity['config'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            };
            entity = golfie.bind(option)(entity);
            golfie = zuuluu.kind;
            option = {};
            entity = zuuluu.id;
            option['id'] = entity;
            entity = zuuluu.label;
            option['title'] = entity;
            entity = zuuluu.commonTriggerPoint;
            option['commonTriggerPoint'] = entity;
            entity = offset.values;
            kiloes = entity.bind(offset)();
            foxtra = new Array(0);
            sizing = foxtra;
            backup = 0;
            entity = arraySpread(sizing, kiloes, backup);
            romeon = foxtra.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.description;
                return entity;
            };
            entity = romeon.bind(foxtra)(entity);
            option['description'] = entity;
            entity = offset.keys;
            kiloes = entity.bind(offset)();
            entity = new Array(0);
            sizing = entity;
            offset = arraySpread(sizing, kiloes, backup);
            option['buckets'] = entity;
            entity = 'guild';
            if(!(entity !== golfie)) { _fun00006_ip = 377; continue _fun00005 }
 344:
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 5;
            entity = offset[entity];
            golfie = golfie.bind(verify)(entity);
            entity = golfie.registerUserExperiment;
            entity = entity.bind(golfie)(option);
            _fun00006_ip = 408; continue _fun00005;
 377:
            golfie = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 5;
            oscard = offset[oscard];
            golfie = golfie.bind(verify)(oscard);
            oscard = golfie.registerGuildExperiment;
            entity = oscard.bind(golfie)(option);
 408:
            var _closure2_slot2 = entity;
            entity = {};
            oscard = function(argFoo) { // Original name: useExperiment
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    option = argFoo;
                    entity = arguments[1];
                    report = undefined;
                    if(!(entity === report)) { _fun00018_ip = 26; continue _fun00017 }
 14:
                    zuuluu = {};
                    tangon = true;
                    zuuluu['autoTrackExposure'] = tangon;
                    entity = zuuluu;
 26:
                    var _closure3_slot0 = report;
                    var _closure3_slot1 = report;
                    var _closure3_slot2 = report;
                    var _closure3_slot3 = report;
                    var _closure3_slot4 = report;
                    var _closure3_slot5 = report;
                    var _closure3_slot6 = report;
                    tangon = entity.disable;
                    zuuluu = null;
                    golfie = zuuluu != tangon;
                    if(!golfie) { _fun00018_ip = 72; continue _fun00017 }
 69:
                    golfie = tangon;
 72:
                    _closure3_slot0 = golfie;
                    oscard = entity.autoTrackExposure;
                    tangon = false;
                    romeon = tangon !== oscard;
                    _closure3_slot1 = romeon;
                    offset = _closure1_slot10;
                    oscard = _closure2_slot0;
                    verify = oscard.kind;
                    oscard = oscard.id;
                    oscard = offset.bind(report)(verify, oscard, option);
                    _closure3_slot2 = oscard;
                    verify = entity.trackExposureOptions;
                    verify = zuuluu == verify;
                    yankee = undefined;
                    if(verify) { _fun00018_ip = 179; continue _fun00017 }
 142:
                    offset = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    verify = 7;
                    verify = foxtra[verify];
                    verify = offset.bind(report)(verify);
                    entity = entity.trackExposureOptions;
                    if(!(zuuluu == entity)) { _fun00018_ip = 174; continue _fun00017 }
 172:
                    entity = {};
 174:
                    yankee = verify.bind(report)(entity);
 179:
                    _closure3_slot3 = yankee;
                    verify = zuuluu == oscard;
                    entity = undefined;
                    if(verify) { _fun00018_ip = 198; continue _fun00017 }
 192:
                    entity = oscard.triggerDebuggingEnabled;
 198:
                    zuuluu = zuuluu != entity;
                    if(!zuuluu) { _fun00018_ip = 208; continue _fun00017 }
 205:
                    zuuluu = entity;
 208:
                    _closure3_slot4 = zuuluu;
                    oscard = _closure1_slot4;
                    entity = function() {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            entity = _closure3_slot2;
                            tangon = null;
                            if(!(tangon != entity)) { _fun00020_ip = 32; continue _fun00019 }
 13:
                            entity = _closure3_slot0;
                            if(entity) { _fun00020_ip = 32; continue _fun00019 }
 20:
                            entity = _closure3_slot2;
                            michal = entity.bucket;
                            _fun00020_ip = 45; continue _fun00019;
 32:
                            entity = _closure1_slot8;
                            michal = entity.NOT_ELIGIBLE;
 45:
                            option = _closure1_slot11;
                            romeon = _closure2_slot0;
                            offset = _closure2_slot1;
                            verify = _closure3_slot2;
                            foxtra = undefined;
                            yankee = michal;
                            report = foxtra[option](romeon, yankee, offset, verify, option);
                            entity = new Array(3);
                            entity[0] = report;
                            entity[1] = michal;
                            michal = _closure3_slot2;
                            tangon = tangon == michal;
                            michal = -1;
                            if(tangon) { _fun00020_ip = 115; continue _fun00019 }
 105:
                            zuuluu = _closure3_slot2;
                            michal = zuuluu.revision;
 115:
                            entity[2] = michal;
                            return entity;
                        }
                    };
                    entity = oscard.bind(report)(entity);
                    offset = _closure1_slot3;
                    backup = 2;
                    foxtra = offset.bind(report)(entity, backup);
                    entity = 0;
                    verify = foxtra[entity];
                    oscard = 3;
                    verify = offset.bind(report)(verify, oscard);
                    entity = verify[entity];
                    oscard = 1;
                    offset = verify[oscard];
                    verify = verify[backup];
                    oscard = foxtra[oscard];
                    _closure3_slot5 = oscard;
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    oscard = 7;
                    oscard = backup[oscard];
                    oscard = foxtra.bind(report)(oscard);
                    oscard = oscard.bind(report)(option);
                    _closure3_slot6 = oscard;
                    tangon = _closure1_slot5;
                    option = new Array(7);
                    option[0] = golfie;
                    option[1] = romeon;
                    option[2] = oscard;
                    option[3] = yankee;
                    option[4] = offset;
                    option[5] = verify;
                    option[6] = zuuluu;
                    zuuluu = function() {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            michal = _closure3_slot0;
                            if(michal) { _fun00022_ip = 30; continue _fun00021 }
 10:
                            tangon = _closure3_slot1;
                            zuuluu = !tangon;
                            if(tangon) { _fun00022_ip = 27; continue _fun00021 }
 20:
                            tangon = _closure3_slot4;
                            zuuluu = !tangon;
 27:
                            michal = zuuluu;
 30:
                            if(michal) { _fun00022_ip = 52; continue _fun00021 }
 33:
                            zuuluu = _closure2_slot0;
                            tangon = zuuluu.commonTriggerPoint;
                            zuuluu = null;
                            michal = zuuluu != tangon;
 52:
                            if(michal) { _fun00022_ip = 89; continue _fun00021 }
 55:
                            report = _closure2_slot3;
                            tangon = _closure3_slot6;
                            zuuluu = _closure3_slot3;
                            oscard = _closure3_slot1;
                            michal = undefined;
                            entity = false;
                            entity = entity === oscard;
                            entity = report.bind(michal)(tangon, zuuluu, entity);
 89:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(report)(zuuluu, option);
                    zuuluu = new Array(2);
                    zuuluu[0] = golfie;
                    zuuluu[1] = oscard;
                    michal = function() {
                        report = _closure2_slot6;
                        tangon = _closure3_slot6;
                        zuuluu = {};
                        entity = _closure3_slot0;
                        zuuluu['disable'] = entity;
                        michal = undefined;
                        entity = function(argFoo, argBar, argBaz) {
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            entity = argBar;
                            var _closure5_slot1 = entity;
                            entity = argBaz;
                            var _closure5_slot2 = entity;
                            zuuluu = _closure3_slot5;
                            entity = undefined;
                            michal = function(argFoo) {
                                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                    entity = argFoo;
                                    michal = 0;
                                    tangon = entity[michal];
                                    michal = _closure5_slot0;
                                    if(!(tangon === michal)) { _fun00024_ip = 50; continue _fun00023 }
 20:
                                    michal = 1;
                                    tangon = entity[michal];
                                    michal = _closure5_slot1;
                                    if(!(tangon === michal)) { _fun00024_ip = 50; continue _fun00023 }
 35:
                                    michal = 2;
                                    tangon = entity[michal];
                                    michal = _closure5_slot2;
                                    if(!(tangon !== michal)) { _fun00024_ip = 81; continue _fun00023 }
 50:
                                    tangon = _closure5_slot0;
                                    michal = new Array(3);
                                    michal[0] = tangon;
                                    tangon = _closure5_slot1;
                                    michal[1] = tangon;
                                    zuuluu = _closure5_slot2;
                                    michal[2] = zuuluu;
                                    entity = michal;
 81:
                                    return entity;
                                }
                            };
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        entity = report.bind(michal)(tangon, entity, zuuluu);
                        return entity;
                    };
                    michal = tangon.bind(report)(michal, zuuluu);
                    return entity;
                }
            };
            entity['useExperiment'] = oscard;
            entity['subscribe'] = report;
            entity['trackExposure'] = tangon;
            tangon = function(argFoo) { // Original name: getCurrentConfig
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    option = argFoo;
                    tangon = arguments[1];
                    oscard = undefined;
                    if(!(tangon === oscard)) { _fun00026_ip = 24; continue _fun00025 }
 12:
                    entity = {};
                    michal = true;
                    entity['autoTrackExposure'] = michal;
                    tangon = entity;
 24:
                    golfie = _closure1_slot10;
                    zuuluu = _closure2_slot0;
                    report = zuuluu.kind;
                    zuuluu = zuuluu.id;
                    report = golfie.bind(oscard)(report, zuuluu, option);
                    golfie = null;
                    if(!(golfie != report)) { _fun00026_ip = 166; continue _fun00025 }
 61:
                    zuuluu = tangon.disable;
                    if(zuuluu) { _fun00026_ip = 166; continue _fun00025 }
 70:
                    zuuluu = tangon.autoTrackExposure;
                    verify = false;
                    if(!(verify === zuuluu)) { _fun00026_ip = 91; continue _fun00025 }
 82:
                    zuuluu = report.triggerDebuggingEnabled;
                    if(!zuuluu) { _fun00026_ip = 137; continue _fun00025 }
 91:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.commonTriggerPoint;
                    if(!(golfie == zuuluu)) { _fun00026_ip = 137; continue _fun00025 }
 105:
                    zuuluu = tangon.autoTrackExposure;
                    golfie = _closure2_slot3;
                    romeon = tangon.trackExposureOptions;
                    yankee = verify === zuuluu;
                    backup = undefined;
                    foxtra = option;
                    offset = report;
                    zuuluu = backup[golfie](foxtra, romeon, yankee, offset, verify);
 137:
                    option = _closure1_slot11;
                    foxtra = _closure2_slot0;
                    romeon = report.bucket;
                    yankee = _closure2_slot1;
                    backup = undefined;
                    offset = report;
                    zuuluu = backup[option](foxtra, romeon, yankee, offset, verify);
                    return zuuluu;
 166:
                    tangon = _closure1_slot11;
                    foxtra = _closure2_slot0;
                    michal = _closure1_slot8;
                    romeon = michal.NOT_ELIGIBLE;
                    yankee = _closure2_slot1;
                    backup = undefined;
                    offset = report;
                    entity = backup[tangon](foxtra, romeon, yankee, offset, verify);
                    return entity;
                }
            };
            entity['getCurrentConfig'] = tangon;
            entity['definition'] = zuuluu;
            michal = function(argFoo) { // Original name: isAAMode
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    report = _closure1_slot10;
                    entity = _closure2_slot0;
                    tangon = entity.kind;
                    zuuluu = entity.id;
                    michal = undefined;
                    entity = argFoo;
                    michal = report.bind(michal)(tangon, zuuluu, entity);
                    entity = null;
                    entity = entity == michal;
                    if(entity) { _fun00028_ip = 54; continue _fun00027 }
 45:
                    michal = michal.aaMode;
                    entity = !michal;
 54:
                    entity = !entity;
                    return entity;
                }
            };
            entity['isAAMode'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();