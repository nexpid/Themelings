// app/modules/experiments/createExperiment.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: getExperimentDescriptor
        _fun7255: for(var _fun7255_ip = 0; ; ) switch(_fun7255_ip) {
 0:
            report = argBar;
            mike = 'guild';
            entity = argFoo;
            if(!(mike !== entity)) { _fun7255_ip = 34; continue _fun7255 }
 14:
            mike = _closure1_slot7;
            entity = mike.getUserExperimentDescriptor;
            entity = entity.bind(mike)(report);
            _fun7255_ip = 61; continue _fun7255;
 34:
            tango = _closure1_slot7;
            zulu = tango.getGuildExperimentDescriptor;
            mike = argBaz;
            mike = mike.guildId;
            entity = zulu.bind(tango)(report, mike);
 61:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: getConfig
        _fun7256: for(var _fun7256_ip = 0; ; ) switch(_fun7256_ip) {
 0:
            mike = argFoo;
            report = argBaz;
            entity = argCorge;
            zulu = null;
            if(!(zulu != entity)) { _fun7256_ip = 24; continue _fun7256 }
 15:
            entity = entity.aaMode;
            if(entity) { _fun7256_ip = 63; continue _fun7256 }
 24:
            tango = report.get;
            entity = argBar;
            tango = tango.bind(report)(entity);
            report = zulu == tango;
            entity = undefined;
            if(report) { _fun7256_ip = 51; continue _fun7256 }
 46:
            entity = tango.config;
 51:
            if(!(zulu == entity)) { _fun7256_ip = 61; continue _fun7256 }
 55:
            entity = mike.defaultConfig;
 61:
            _fun7256_ip = 69; continue _fun7256;
 63:
            entity = mike.defaultConfig;
 69:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.useState;
    var _closure1_slot4 = options;
    tango = tango.useEffect;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ExperimentBuckets;
    var _closure1_slot8 = golf;
    tango = tango.ExposureTypes;
    var _closure1_slot9 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/experiments/createExperiment.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: createExperiment
        _fun7257: for(var _fun7257_ip = 0; ; ) switch(_fun7257_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            entity = function(argFoo) { // Original name: trackAutoExposure
                _fun7258: for(var _fun7258_ip = 0; ; ) switch(_fun7258_ip) {
 0:
                    report = argFoo;
                    tango = arguments[1];
                    zulu = arguments[3];
                    entity = undefined;
                    if(!(tango === entity)) { _fun7258_ip = 17; continue _fun7258 }
 15:
                    tango = {};
 17:
                    if(!(zulu === entity)) { _fun7258_ip = 23; continue _fun7258 }
 21:
                    zulu = null;
 23:
                    oscar = _closure1_slot9;
                    mike = arguments[2];
                    if(mike) { _fun7258_ip = 44; continue _fun7258 }
 36:
                    mike = oscar.AUTO;
                    _fun7258_ip = 50; continue _fun7258;
 44:
                    mike = oscar.AUTO_FALLBACK;
 50:
                    tango['exposureType'] = mike;
                    mike = false;
                    tango['excluded'] = mike;
                    mike = null;
                    if(!(mike == zulu)) { _fun7258_ip = 85; continue _fun7258 }
 70:
                    mike = _closure2_slot4;
                    mike = mike.bind(entity)(report, tango);
                    _fun7258_ip = 99; continue _fun7258;
 85:
                    mike = _closure2_slot5;
                    mike = mike.bind(entity)(report, tango, zulu);
 99:
                    return entity;
                }
            };
            var _closure2_slot3 = entity;
            tango = function(argFoo) { // Original name: trackExposure
                _fun7259: for(var _fun7259_ip = 0; ; ) switch(_fun7259_ip) {
 0:
                    report = argFoo;
                    tango = arguments[1];
                    entity = undefined;
                    if(!(tango === entity)) { _fun7259_ip = 42; continue _fun7259 }
 12:
                    mike = {};
                    zulu = false;
                    mike['excluded'] = zulu;
                    zulu = _closure1_slot9;
                    zulu = zulu.MANUAL;
                    mike['exposureType'] = zulu;
                    tango = mike;
 42:
                    golf = _closure1_slot10;
                    zulu = _closure2_slot0;
                    oscar = zulu.kind;
                    zulu = _closure2_slot2;
                    zulu = zulu.id;
                    zulu = golf.bind(entity)(oscar, zulu, report);
                    oscar = null;
                    if(!(oscar != zulu)) { _fun7259_ip = 94; continue _fun7259 }
 83:
                    mike = _closure2_slot5;
                    mike = mike.bind(entity)(report, tango, zulu);
 94:
                    return entity;
                }
            };
            var _closure2_slot4 = tango;
            entity = function(argFoo, argBar, argBaz) { // Original name: trackExposureWithDescriptor
                _fun7260: for(var _fun7260_ip = 0; ; ) switch(_fun7260_ip) {
 0:
                    yankee = argFoo;
                    verify = argBar;
                    report = argBaz;
                    options = null;
                    if(!(options != report)) { _fun7260_ip = 242; continue _fun7260 }
 18:
                    entity = _closure1_slot9;
                    oscar = entity.MANUAL;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 5;
                    entity = zulu[entity];
                    golf = undefined;
                    tango = mike.bind(golf)(entity);
                    zulu = tango.trackExposureToExperiment;
                    entity = _closure2_slot2;
                    mike = entity.id;
                    entity = {};
                    foxtrot = options == yankee;
                    romeo = undefined;
                    if(foxtrot) { _fun7260_ip = 87; continue _fun7260 }
 82:
                    romeo = yankee.location;
 87:
                    foxtrot = options != romeo;
                    yankee = 'unknown';
                    if(!foxtrot) { _fun7260_ip = 101; continue _fun7260 }
 98:
                    yankee = romeo;
 101:
                    entity['location'] = yankee;
                    romeo = options == verify;
                    yankee = undefined;
                    if(romeo) { _fun7260_ip = 120; continue _fun7260 }
 114:
                    yankee = verify.analyticsLocations;
 120:
                    if(!(options == yankee)) { _fun7260_ip = 128; continue _fun7260 }
 124:
                    yankee = new Array(0);
 128:
                    entity['analyticsLocations'] = yankee;
                    romeo = options == verify;
                    yankee = undefined;
                    if(romeo) { _fun7260_ip = 148; continue _fun7260 }
 142:
                    yankee = verify.fingerprint;
 148:
                    if(!(options == yankee)) { _fun7260_ip = 166; continue _fun7260 }
 152:
                    romeo = _closure1_slot6;
                    offset = romeo.getFingerprint;
                    yankee = offset.bind(romeo)();
 166:
                    romeo = options != yankee;
                    offset = undefined;
                    if(!romeo) { _fun7260_ip = 178; continue _fun7260 }
 175:
                    offset = yankee;
 178:
                    entity['fingerprint'] = offset;
                    yankee = options == verify;
                    offset = undefined;
                    if(yankee) { _fun7260_ip = 198; continue _fun7260 }
 192:
                    offset = verify.excluded;
 198:
                    if(offset) { _fun7260_ip = 203; continue _fun7260 }
 201:
                    offset = false;
 203:
                    entity['excluded'] = offset;
                    offset = options == verify;
                    golf = undefined;
                    if(offset) { _fun7260_ip = 223; continue _fun7260 }
 217:
                    golf = verify.exposureType;
 223:
                    if(!(options != golf)) { _fun7260_ip = 230; continue _fun7260 }
 227:
                    oscar = golf;
 230:
                    entity['exposureType'] = oscar;
                    entity = zulu.bind(tango)(mike, report, entity);
 242:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure2_slot5 = entity;
            report = function(argFoo, argBar) { // Original name: subscribe
                _fun7261: for(var _fun7261_ip = 0; ; ) switch(_fun7261_ip) {
 0:
                    romeo = argFoo;
                    options = argBar;
                    mike = arguments[2];
                    var _closure3_slot0 = romeo;
                    var _closure3_slot1 = options;
                    golf = undefined;
                    if(!(mike === golf)) { _fun7261_ip = 27; continue _fun7261 }
 25:
                    mike = {};
 27:
                    var _closure3_slot2 = golf;
                    var _closure3_slot3 = golf;
                    var _closure3_slot4 = golf;
                    tango = function() { // Original name: onStoreChange
                        _fun7262: for(var _fun7262_ip = 0; ; ) switch(_fun7262_ip) {
 0:
                            options = _closure1_slot10;
                            entity = _closure2_slot0;
                            oscar = entity.kind;
                            tango = entity.id;
                            mike = _closure3_slot0;
                            entity = undefined;
                            verify = options.bind(entity)(oscar, tango, mike);
                            mike = null;
                            if(!(mike != verify)) { _fun7262_ip = 61; continue _fun7262 }
 46:
                            tango = _closure3_slot2;
                            if(tango) { _fun7262_ip = 61; continue _fun7262 }
 53:
                            tango = verify.bucket;
                            _fun7262_ip = 71; continue _fun7262;
 61:
                            oscar = _closure1_slot8;
                            tango = oscar.NOT_ELIGIBLE;
 71:
                            oscar = mike == verify;
                            mike = -1;
                            if(oscar) { _fun7262_ip = 90; continue _fun7262 }
 84:
                            mike = verify.revision;
 90:
                            oscar = _closure3_slot3;
                            oscar = tango === oscar;
                            if(!oscar) { _fun7262_ip = 109; continue _fun7262 }
 101:
                            options = _closure3_slot4;
                            oscar = options === mike;
 109:
                            if(oscar) { _fun7262_ip = 155; continue _fun7262 }
 112:
                            oscar = _closure3_slot1;
                            options = _closure1_slot11;
                            foxtrot = _closure2_slot0;
                            yankee = _closure2_slot1;
                            backup = undefined;
                            romeo = tango;
                            offset = verify;
                            report = backup[options](foxtrot, romeo, yankee, offset, verify);
                            report = oscar.bind(entity)(report, tango, mike);
                            _closure3_slot3 = tango;
                            _closure3_slot4 = mike;
 155:
                            return entity;
                        }
                    };
                    var _closure3_slot5 = tango;
                    zulu = mike.disable;
                    report = null;
                    oscar = report != zulu;
                    if(!oscar) { _fun7261_ip = 69; continue _fun7261 }
 63:
                    oscar = mike.disable;
 69:
                    _closure3_slot2 = oscar;
                    yankee = _closure1_slot10;
                    verify = _closure2_slot0;
                    offset = verify.kind;
                    verify = verify.id;
                    offset = yankee.bind(golf)(offset, verify, romeo);
                    if(!(report != offset)) { _fun7261_ip = 119; continue _fun7261 }
 108:
                    if(oscar) { _fun7261_ip = 119; continue _fun7261 }
 111:
                    oscar = offset.bucket;
                    _fun7261_ip = 129; continue _fun7261;
 119:
                    verify = _closure1_slot8;
                    oscar = verify.NOT_ELIGIBLE;
 129:
                    _closure3_slot3 = oscar;
                    oscar = report == offset;
                    report = -1;
                    if(oscar) { _fun7261_ip = 152; continue _fun7261 }
 146:
                    report = offset.revision;
 152:
                    _closure3_slot4 = report;
                    verify = _closure1_slot11;
                    sizing = _closure2_slot0;
                    kilo = _closure3_slot3;
                    backup = _closure2_slot1;
                    output = undefined;
                    foxtrot = offset;
                    oscar = output[verify](sizing, kilo, backup, foxtrot, romeo);
                    report = _closure3_slot3;
                    zulu = _closure3_slot4;
                    zulu = options.bind(golf)(oscar, report, zulu);
                    zulu = _closure1_slot7;
                    mike = zulu.addReactChangeListener;
                    mike = mike.bind(zulu)(tango);
                    entity = function() {
                        zulu = _closure1_slot7;
                        mike = zulu.removeReactChangeListener;
                        entity = _closure3_slot5;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                }
            };
            var _closure2_slot6 = report;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 6;
            entity = options[entity];
            verify = undefined;
            yankee = golf.bind(verify)(entity);
            offset = yankee.validateOneExperiment;
            options = zulu.id;
            golf = zulu.label;
            entity = zulu.commonTriggerPoint;
            entity = offset.bind(yankee)(options, golf, entity);
            entity = global;
            entity = entity.Map;
            golf = entity.prototype;
            golf = Object.create(golf, {constructor: {value: entity}});
            output = golf;
            entity = new output[entity](sizing);
            offset = entity instanceof Object ? entity : golf;
            var _closure2_slot1 = offset;
            yankee = offset.set;
            entity = _closure1_slot8;
            options = entity.NOT_ELIGIBLE;
            golf = {};
            romeo = 'Not Eligible';
            golf['description'] = romeo;
            romeo = zulu.defaultConfig;
            golf['config'] = romeo;
            golf = yankee.bind(offset)(options, golf);
            options = offset.set;
            golf = entity.CONTROL;
            entity = {};
            yankee = 'Control Bucket';
            entity['description'] = yankee;
            yankee = zulu.defaultConfig;
            entity['config'] = yankee;
            entity = options.bind(offset)(golf, entity);
            options = zulu.treatments;
            golf = options.forEach;
            entity = function(argFoo) {
                report = argFoo;
                tango = _closure2_slot1;
                zulu = tango.set;
                mike = report.id;
                entity = {};
                offset = report.id;
                verify = report.label;
                oscar = global;
                oscar = oscar.HermesInternal;
                options = oscar.concat;
                golf = 'Treatment ';
                oscar = ': ';
                oscar = options.bind(golf)(offset, oscar, verify);
                entity['description'] = oscar;
                report = report.config;
                entity['config'] = report;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            };
            entity = golf.bind(options)(entity);
            golf = zulu.kind;
            options = {};
            entity = zulu.id;
            options['id'] = entity;
            entity = zulu.label;
            options['title'] = entity;
            entity = zulu.commonTriggerPoint;
            options['commonTriggerPoint'] = entity;
            entity = offset.values;
            kilo = entity.bind(offset)();
            foxtrot = new Array(0);
            sizing = foxtrot;
            backup = 0;
            entity = arraySpread(sizing, kilo, backup);
            romeo = foxtrot.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.description;
                return entity;
            };
            entity = romeo.bind(foxtrot)(entity);
            options['description'] = entity;
            entity = offset.keys;
            kilo = entity.bind(offset)();
            entity = new Array(0);
            sizing = entity;
            offset = arraySpread(sizing, kilo, backup);
            options['buckets'] = entity;
            entity = 'guild';
            if(!(entity !== golf)) { _fun7257_ip = 377; continue _fun7257 }
 344:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 5;
            entity = offset[entity];
            golf = golf.bind(verify)(entity);
            entity = golf.registerUserExperiment;
            entity = entity.bind(golf)(options);
            _fun7257_ip = 408; continue _fun7257;
 377:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 5;
            oscar = offset[oscar];
            golf = golf.bind(verify)(oscar);
            oscar = golf.registerGuildExperiment;
            entity = oscar.bind(golf)(options);
 408:
            var _closure2_slot2 = entity;
            entity = {};
            oscar = function(argFoo) { // Original name: useExperiment
                _fun7266: for(var _fun7266_ip = 0; ; ) switch(_fun7266_ip) {
 0:
                    options = argFoo;
                    entity = arguments[1];
                    report = undefined;
                    if(!(entity === report)) { _fun7266_ip = 26; continue _fun7266 }
 14:
                    zulu = {};
                    tango = true;
                    zulu['autoTrackExposure'] = tango;
                    entity = zulu;
 26:
                    var _closure3_slot0 = report;
                    var _closure3_slot1 = report;
                    var _closure3_slot2 = report;
                    var _closure3_slot3 = report;
                    var _closure3_slot4 = report;
                    var _closure3_slot5 = report;
                    var _closure3_slot6 = report;
                    tango = entity.disable;
                    zulu = null;
                    golf = zulu != tango;
                    if(!golf) { _fun7266_ip = 72; continue _fun7266 }
 69:
                    golf = tango;
 72:
                    _closure3_slot0 = golf;
                    oscar = entity.autoTrackExposure;
                    tango = false;
                    romeo = tango !== oscar;
                    _closure3_slot1 = romeo;
                    offset = _closure1_slot10;
                    oscar = _closure2_slot0;
                    verify = oscar.kind;
                    oscar = oscar.id;
                    oscar = offset.bind(report)(verify, oscar, options);
                    _closure3_slot2 = oscar;
                    verify = entity.trackExposureOptions;
                    verify = zulu == verify;
                    yankee = undefined;
                    if(verify) { _fun7266_ip = 179; continue _fun7266 }
 142:
                    offset = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    verify = 7;
                    verify = foxtrot[verify];
                    verify = offset.bind(report)(verify);
                    entity = entity.trackExposureOptions;
                    if(!(zulu == entity)) { _fun7266_ip = 174; continue _fun7266 }
 172:
                    entity = {};
 174:
                    yankee = verify.bind(report)(entity);
 179:
                    _closure3_slot3 = yankee;
                    verify = zulu == oscar;
                    entity = undefined;
                    if(verify) { _fun7266_ip = 198; continue _fun7266 }
 192:
                    entity = oscar.triggerDebuggingEnabled;
 198:
                    zulu = zulu != entity;
                    if(!zulu) { _fun7266_ip = 208; continue _fun7266 }
 205:
                    zulu = entity;
 208:
                    _closure3_slot4 = zulu;
                    oscar = _closure1_slot4;
                    entity = function() {
                        _fun7267: for(var _fun7267_ip = 0; ; ) switch(_fun7267_ip) {
 0:
                            entity = _closure3_slot2;
                            tango = null;
                            if(!(tango != entity)) { _fun7267_ip = 32; continue _fun7267 }
 13:
                            entity = _closure3_slot0;
                            if(entity) { _fun7267_ip = 32; continue _fun7267 }
 20:
                            entity = _closure3_slot2;
                            mike = entity.bucket;
                            _fun7267_ip = 45; continue _fun7267;
 32:
                            entity = _closure1_slot8;
                            mike = entity.NOT_ELIGIBLE;
 45:
                            options = _closure1_slot11;
                            romeo = _closure2_slot0;
                            offset = _closure2_slot1;
                            verify = _closure3_slot2;
                            foxtrot = undefined;
                            yankee = mike;
                            report = foxtrot[options](romeo, yankee, offset, verify, options);
                            entity = new Array(3);
                            entity[0] = report;
                            entity[1] = mike;
                            mike = _closure3_slot2;
                            tango = tango == mike;
                            mike = -1;
                            if(tango) { _fun7267_ip = 115; continue _fun7267 }
 105:
                            zulu = _closure3_slot2;
                            mike = zulu.revision;
 115:
                            entity[2] = mike;
                            return entity;
                        }
                    };
                    entity = oscar.bind(report)(entity);
                    offset = _closure1_slot3;
                    backup = 2;
                    foxtrot = offset.bind(report)(entity, backup);
                    entity = 0;
                    verify = foxtrot[entity];
                    oscar = 3;
                    verify = offset.bind(report)(verify, oscar);
                    entity = verify[entity];
                    oscar = 1;
                    offset = verify[oscar];
                    verify = verify[backup];
                    oscar = foxtrot[oscar];
                    _closure3_slot5 = oscar;
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot2;
                    oscar = 7;
                    oscar = backup[oscar];
                    oscar = foxtrot.bind(report)(oscar);
                    oscar = oscar.bind(report)(options);
                    _closure3_slot6 = oscar;
                    tango = _closure1_slot5;
                    options = new Array(7);
                    options[0] = golf;
                    options[1] = romeo;
                    options[2] = oscar;
                    options[3] = yankee;
                    options[4] = offset;
                    options[5] = verify;
                    options[6] = zulu;
                    zulu = function() {
                        _fun7268: for(var _fun7268_ip = 0; ; ) switch(_fun7268_ip) {
 0:
                            mike = _closure3_slot0;
                            if(mike) { _fun7268_ip = 30; continue _fun7268 }
 10:
                            tango = _closure3_slot1;
                            zulu = !tango;
                            if(tango) { _fun7268_ip = 27; continue _fun7268 }
 20:
                            tango = _closure3_slot4;
                            zulu = !tango;
 27:
                            mike = zulu;
 30:
                            if(mike) { _fun7268_ip = 52; continue _fun7268 }
 33:
                            zulu = _closure2_slot0;
                            tango = zulu.commonTriggerPoint;
                            zulu = null;
                            mike = zulu != tango;
 52:
                            if(mike) { _fun7268_ip = 89; continue _fun7268 }
 55:
                            report = _closure2_slot3;
                            tango = _closure3_slot6;
                            zulu = _closure3_slot3;
                            oscar = _closure3_slot1;
                            mike = undefined;
                            entity = false;
                            entity = entity === oscar;
                            entity = report.bind(mike)(tango, zulu, entity);
 89:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zulu = tango.bind(report)(zulu, options);
                    zulu = new Array(2);
                    zulu[0] = golf;
                    zulu[1] = oscar;
                    mike = function() {
                        report = _closure2_slot6;
                        tango = _closure3_slot6;
                        zulu = {};
                        entity = _closure3_slot0;
                        zulu['disable'] = entity;
                        mike = undefined;
                        entity = function(argFoo, argBar, argBaz) {
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            entity = argBar;
                            var _closure5_slot1 = entity;
                            entity = argBaz;
                            var _closure5_slot2 = entity;
                            zulu = _closure3_slot5;
                            entity = undefined;
                            mike = function(argFoo) {
                                _fun7271: for(var _fun7271_ip = 0; ; ) switch(_fun7271_ip) {
 0:
                                    entity = argFoo;
                                    mike = 0;
                                    tango = entity[mike];
                                    mike = _closure5_slot0;
                                    if(!(tango === mike)) { _fun7271_ip = 50; continue _fun7271 }
 20:
                                    mike = 1;
                                    tango = entity[mike];
                                    mike = _closure5_slot1;
                                    if(!(tango === mike)) { _fun7271_ip = 50; continue _fun7271 }
 35:
                                    mike = 2;
                                    tango = entity[mike];
                                    mike = _closure5_slot2;
                                    if(!(tango !== mike)) { _fun7271_ip = 81; continue _fun7271 }
 50:
                                    tango = _closure5_slot0;
                                    mike = new Array(3);
                                    mike[0] = tango;
                                    tango = _closure5_slot1;
                                    mike[1] = tango;
                                    zulu = _closure5_slot2;
                                    mike[2] = zulu;
                                    entity = mike;
 81:
                                    return entity;
                                }
                            };
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        };
                        entity = report.bind(mike)(tango, entity, zulu);
                        return entity;
                    };
                    mike = tango.bind(report)(mike, zulu);
                    return entity;
                }
            };
            entity['useExperiment'] = oscar;
            entity['subscribe'] = report;
            entity['trackExposure'] = tango;
            tango = function(argFoo) { // Original name: getCurrentConfig
                _fun7272: for(var _fun7272_ip = 0; ; ) switch(_fun7272_ip) {
 0:
                    options = argFoo;
                    tango = arguments[1];
                    oscar = undefined;
                    if(!(tango === oscar)) { _fun7272_ip = 24; continue _fun7272 }
 12:
                    entity = {};
                    mike = true;
                    entity['autoTrackExposure'] = mike;
                    tango = entity;
 24:
                    golf = _closure1_slot10;
                    zulu = _closure2_slot0;
                    report = zulu.kind;
                    zulu = zulu.id;
                    report = golf.bind(oscar)(report, zulu, options);
                    golf = null;
                    if(!(golf != report)) { _fun7272_ip = 166; continue _fun7272 }
 61:
                    zulu = tango.disable;
                    if(zulu) { _fun7272_ip = 166; continue _fun7272 }
 70:
                    zulu = tango.autoTrackExposure;
                    verify = false;
                    if(!(verify === zulu)) { _fun7272_ip = 91; continue _fun7272 }
 82:
                    zulu = report.triggerDebuggingEnabled;
                    if(!zulu) { _fun7272_ip = 137; continue _fun7272 }
 91:
                    zulu = _closure2_slot0;
                    zulu = zulu.commonTriggerPoint;
                    if(!(golf == zulu)) { _fun7272_ip = 137; continue _fun7272 }
 105:
                    zulu = tango.autoTrackExposure;
                    golf = _closure2_slot3;
                    romeo = tango.trackExposureOptions;
                    yankee = verify === zulu;
                    backup = undefined;
                    foxtrot = options;
                    offset = report;
                    zulu = backup[golf](foxtrot, romeo, yankee, offset, verify);
 137:
                    options = _closure1_slot11;
                    foxtrot = _closure2_slot0;
                    romeo = report.bucket;
                    yankee = _closure2_slot1;
                    backup = undefined;
                    offset = report;
                    zulu = backup[options](foxtrot, romeo, yankee, offset, verify);
                    return zulu;
 166:
                    tango = _closure1_slot11;
                    foxtrot = _closure2_slot0;
                    mike = _closure1_slot8;
                    romeo = mike.NOT_ELIGIBLE;
                    yankee = _closure2_slot1;
                    backup = undefined;
                    offset = report;
                    entity = backup[tango](foxtrot, romeo, yankee, offset, verify);
                    return entity;
                }
            };
            entity['getCurrentConfig'] = tango;
            entity['definition'] = zulu;
            mike = function(argFoo) { // Original name: isAAMode
                _fun7273: for(var _fun7273_ip = 0; ; ) switch(_fun7273_ip) {
 0:
                    report = _closure1_slot10;
                    entity = _closure2_slot0;
                    tango = entity.kind;
                    zulu = entity.id;
                    mike = undefined;
                    entity = argFoo;
                    mike = report.bind(mike)(tango, zulu, entity);
                    entity = null;
                    entity = entity == mike;
                    if(entity) { _fun7273_ip = 54; continue _fun7273 }
 45:
                    mike = mike.aaMode;
                    entity = !mike;
 54:
                    entity = !entity;
                    return entity;
                }
            };
            entity['isAAMode'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();