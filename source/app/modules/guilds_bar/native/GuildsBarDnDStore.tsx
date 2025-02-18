// app/modules/guilds_bar/native/GuildsBarDnDStore.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.GuildsNodeType;
    var _closure1_slot2 = tangon;
    tangon = {'mode': null, 'initialX': 0, 'initialY': 0, 'absoluteX': 0, 'absoluteY': 0};
    var _closure1_slot3 = tangon;
    report = -1;
    var _closure1_slot4 = report;
    report = 1;
    report = option[report];
    verify = golfie.bind(entity)(report);
    oscard = verify.createWithEqualityFn;
    report = function(argFoo, argBar) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        oscard = undefined;
        entity['dragSpecs'] = oscard;
        entity['overSpecs'] = oscard;
        entity['dropSpecs'] = oscard;
        report = _closure1_slot0;
        golfie = _closure1_slot1;
        tangon = 2;
        zuuluu = golfie[tangon];
        yankee = report.bind(oscard)(zuuluu);
        offset = yankee.makeMutable;
        zuuluu = 0;
        verify = {'min': 0, 'max': 0};
        verify = offset.bind(yankee)(verify);
        entity['dragRegion'] = verify;
        verify = golfie[tangon];
        offset = report.bind(oscard)(verify);
        verify = offset.makeMutable;
        option = _closure1_slot3;
        option = verify.bind(offset)(option);
        entity['gestureState'] = option;
        option = golfie[tangon];
        offset = report.bind(oscard)(option);
        verify = offset.makeMutable;
        option = false;
        option = verify.bind(offset)(option);
        entity['dragDropInProgress'] = option;
        option = golfie[tangon];
        offset = report.bind(oscard)(option);
        verify = offset.makeMutable;
        option = {'start': 0, 'end': 0};
        option = verify.bind(offset)(option);
        entity['listInsets'] = option;
        tangon = golfie[tangon];
        report = report.bind(oscard)(tangon);
        tangon = report.makeMutable;
        tangon = tangon.bind(report)(zuuluu);
        entity['scrollPosition'] = tangon;
        entity['windowSize'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: setStateShallow
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                yankee = argFoo;
                var _closure3_slot0 = yankee;
                zuuluu = _closure2_slot1;
                entity = undefined;
                offset = zuuluu.bind(entity)();
                var _closure3_slot1 = offset;
                option = yankee;
                for(report in option)
 37:
                {
 46:
                    zuuluu = report;
                    tangon = offset[zuuluu];
                    zuuluu = yankee[zuuluu];
                    if(tangon === zuuluu) { _fun00002_ip = 37; continue _fun00001 }
 61:
                    tangon = _closure1_slot0;
                    report = _closure1_slot1;
                    zuuluu = 3;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.batchUpdates;
                    michal = function() {
                        zuuluu = _closure2_slot0;
                        michal = {};
                        report = _closure3_slot1;
                        oscard = michal;
                        tangon = copyDataProperties(oscard, report);
                        report = _closure3_slot0;
                        oscard = michal;
                        entity = copyDataProperties(oscard, report);
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    michal = undefined;
                    return michal;
                }
 106:
                return entity;
            }
        };
        entity['setStateShallow'] = zuuluu;
        zuuluu = function(argFoo) { // Original name: dropStart
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                tangon = zuuluu.dropSpecs;
                zuuluu = zuuluu.gestureState;
                var _closure3_slot1 = zuuluu;
                zuuluu = null;
                if(!(zuuluu == tangon)) { _fun00004_ip = 129; continue _fun00003 }
 44:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                tangon = 3;
                tangon = oscard[tangon];
                oscard = report.bind(entity)(tangon);
                report = oscard.batchUpdates;
                tangon = function() {
                    zuuluu = _closure2_slot0;
                    michal = {};
                    entity = _closure3_slot0;
                    michal['dropSpecs'] = entity;
                    entity = undefined;
                    michal['dragSpecs'] = entity;
                    michal['overSpecs'] = entity;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                tangon = report.bind(oscard)(tangon);
                tangon = global;
                oscard = tangon.clearTimeout;
                report = _closure1_slot4;
                report = oscard.bind(entity)(report);
                report = tangon.setTimeout;
                tangon = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.get;
                        tangon = michal.bind(zuuluu)();
                        zuuluu = tangon.mode;
                        michal = 'drag';
                        if(!(michal === zuuluu)) { _fun00006_ip = 66; continue _fun00005 }
 29:
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.set;
                        entity = {};
                        golfie = entity;
                        oscard = tangon;
                        tangon = copyDataProperties(golfie, oscard);
                        report = null;
                        tangon = 'mode';
                        entity[tangon] = report;
                        entity = michal.bind(zuuluu)(entity);
 66:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = 0;
                michal = report.bind(entity)(tangon, michal);
                _closure1_slot4 = michal;
                return entity;
 129:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                option = 'GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress';
                verify = michal;
                entity = new verify[zuuluu](option, golfie);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity['dropStart'] = zuuluu;
        michal = function() { // Original name: dropComplete
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot1;
                entity = undefined;
                michal = michal.bind(entity)();
                tangon = michal.gestureState;
                report = michal.dragDropInProgress;
                zuuluu = michal.dropSpecs;
                michal = michal.dragSpecs;
                oscard = null;
                if(!(oscard != zuuluu)) { _fun00008_ip = 175; continue _fun00007 }
 46:
                option = _closure1_slot0;
                verify = _closure1_slot1;
                golfie = 3;
                golfie = verify[golfie];
                verify = option.bind(entity)(golfie);
                option = verify.batchUpdates;
                golfie = function() {
                    zuuluu = _closure2_slot0;
                    michal = {};
                    entity = undefined;
                    michal['dropSpecs'] = entity;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                golfie = option.bind(verify)(golfie);
                golfie = global;
                golfie = golfie.clearTimeout;
                zuuluu = _closure1_slot4;
                zuuluu = golfie.bind(entity)(zuuluu);
                if(!(oscard == michal)) { _fun00008_ip = 122; continue _fun00007 }
 110:
                zuuluu = report.set;
                michal = false;
                michal = zuuluu.bind(report)(michal);
 122:
                michal = tangon.get;
                report = michal.bind(tangon)();
                zuuluu = report.mode;
                michal = 'drag';
                if(!(michal === zuuluu)) { _fun00008_ip = 175; continue _fun00007 }
 144:
                zuuluu = tangon.set;
                michal = {};
                yankee = michal;
                offset = report;
                report = copyDataProperties(yankee, offset);
                report = 'mode';
                michal[report] = oscard;
                michal = zuuluu.bind(tangon)(michal);
 175:
                return entity;
            }
        };
        entity['dropComplete'] = michal;
        return entity;
    };
    report = oscard.bind(verify)(report);
    var _closure1_slot5 = report;
    oscard = 5;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/guilds_bar/native/GuildsBarDnDStore.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['INITIAL_GESTURE_STATE'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useItemDragState
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        tangon = _closure1_slot5;
        report = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 4;
        michal = zuuluu[michal];
        zuuluu = undefined;
        michal = report.bind(zuuluu)(michal);
        michal = michal.shallow;
        entity = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                option = entity.dragSpecs;
                yankee = entity.overSpecs;
                verify = entity.dropSpecs;
                michal = entity.dragDropInProgress;
                report = null;
                if(!(report == option)) { _fun00010_ip = 40; continue _fun00009 }
 33:
                if(!(report != verify)) { _fun00010_ip = 364; continue _fun00009 }
 40:
                entity = _closure2_slot1;
                zuuluu = !entity;
                if(!zuuluu) { _fun00010_ip = 137; continue _fun00009 }
 53:
                entity = report == option;
                tangon = undefined;
                if(entity) { _fun00010_ip = 73; continue _fun00009 }
 62:
                entity = option.node;
                tangon = entity.id;
 73:
                entity = _closure2_slot0;
                entity = tangon === entity;
                if(!entity) { _fun00010_ip = 103; continue _fun00009 }
 84:
                offset = report == yankee;
                tangon = undefined;
                if(offset) { _fun00010_ip = 99; continue _fun00009 }
 93:
                tangon = yankee.node;
 99:
                entity = report != tangon;
 103:
                if(entity) { _fun00010_ip = 134; continue _fun00009 }
 106:
                tangon = report == verify;
                golfie = undefined;
                if(tangon) { _fun00010_ip = 126; continue _fun00009 }
 115:
                tangon = verify.dragNode;
                golfie = tangon.id;
 126:
                tangon = _closure2_slot0;
                entity = golfie === tangon;
 134:
                zuuluu = entity;
 137:
                entity = _closure2_slot1;
                tangon = !entity;
                if(!tangon) { _fun00010_ip = 209; continue _fun00009 }
 147:
                entity = report == yankee;
                offset = undefined;
                if(entity) { _fun00010_ip = 167; continue _fun00009 }
 156:
                entity = yankee.node;
                offset = entity.id;
 167:
                entity = _closure2_slot0;
                entity = offset === entity;
                if(entity) { _fun00010_ip = 206; continue _fun00009 }
 178:
                offset = report == verify;
                golfie = undefined;
                if(offset) { _fun00010_ip = 198; continue _fun00009 }
 187:
                offset = verify.overNode;
                golfie = offset.id;
 198:
                oscard = _closure2_slot0;
                entity = golfie === oscard;
 206:
                tangon = entity;
 209:
                entity = {};
                entity['isDragTarget'] = zuuluu;
                if(zuuluu) { _fun00010_ip = 224; continue _fun00009 }
 219:
                zuuluu = undefined;
                if(!tangon) { _fun00010_ip = 244; continue _fun00009 }
 224:
                golfie = report == verify;
                oscard = 'dropping';
                if(!golfie) { _fun00010_ip = 241; continue _fun00009 }
 237:
                oscard = 'dragging';
 241:
                zuuluu = oscard;
 244:
                entity['dragState'] = zuuluu;
                zuuluu = undefined;
                if(!tangon) { _fun00010_ip = 293; continue _fun00009 }
 254:
                offset = report == verify;
                oscard = undefined;
                if(offset) { _fun00010_ip = 269; continue _fun00009 }
 263:
                oscard = verify.overState;
 269:
                if(!(report == oscard)) { _fun00010_ip = 290; continue _fun00009 }
 273:
                romeon = report == yankee;
                offset = undefined;
                if(romeon) { _fun00010_ip = 287; continue _fun00009 }
 282:
                offset = yankee.state;
 287:
                oscard = offset;
 290:
                zuuluu = oscard;
 293:
                entity['overState'] = zuuluu;
                zuuluu = 0;
                if(!tangon) { _fun00010_ip = 352; continue _fun00009 }
 303:
                offset = report == verify;
                tangon = undefined;
                if(offset) { _fun00010_ip = 318; continue _fun00009 }
 312:
                tangon = verify.itemSize;
 318:
                if(!(report == tangon)) { _fun00010_ip = 340; continue _fun00009 }
 322:
                verify = report == option;
                golfie = undefined;
                if(verify) { _fun00010_ip = 337; continue _fun00009 }
 331:
                golfie = option.itemSize;
 337:
                tangon = golfie;
 340:
                report = report != tangon;
                zuuluu = 0;
                if(!report) { _fun00010_ip = 352; continue _fun00009 }
 349:
                zuuluu = tangon;
 352:
                entity['itemSize'] = zuuluu;
                entity['dragDropInProgress'] = michal;
                return entity;
 364:
                entity = {};
                zuuluu = false;
                entity['isDragTarget'] = zuuluu;
                zuuluu = undefined;
                entity['dragState'] = zuuluu;
                entity['overState'] = zuuluu;
                zuuluu = 0;
                entity['itemSize'] = zuuluu;
                entity['dragDropInProgress'] = michal;
                return entity;
            }
        };
        entity = tangon.bind(zuuluu)(entity, michal);
        return entity;
    };
    zuuluu['useItemDragState'] = tangon;
    michal = function(argFoo) { // Original name: useFolderBGHeightOffset
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot5;
        michal = undefined;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                tangon = entity.dragSpecs;
                report = entity.overSpecs;
                entity = entity.dropSpecs;
                michal = null;
                zuuluu = michal != entity;
                entity = 0;
                if(zuuluu) { _fun00012_ip = 275; continue _fun00011 }
 35:
                zuuluu = michal == report;
                entity = 0;
                if(zuuluu) { _fun00012_ip = 275; continue _fun00011 }
 47:
                michal = michal == tangon;
                entity = 0;
                if(michal) { _fun00012_ip = 275; continue _fun00011 }
 59:
                zuuluu = report.state;
                michal = 'self';
                entity = 0;
                if(!(michal !== zuuluu)) { _fun00012_ip = 275; continue _fun00011 }
 77:
                michal = tangon.node;
                zuuluu = michal.type;
                michal = _closure1_slot2;
                michal = michal.GUILD;
                entity = 0;
                if(!(zuuluu === michal)) { _fun00012_ip = 275; continue _fun00011 }
 110:
                michal = tangon.node;
                zuuluu = michal.parentId;
                michal = _closure2_slot0;
                if(!(zuuluu !== michal)) { _fun00012_ip = 197; continue _fun00011 }
 133:
                michal = report.node;
                zuuluu = michal.parentId;
                michal = _closure2_slot0;
                if(!(zuuluu !== michal)) { _fun00012_ip = 189; continue _fun00011 }
 153:
                michal = report.node;
                option = michal.id;
                zuuluu = _closure2_slot0;
                michal = 0;
                if(!(option === zuuluu)) { _fun00012_ip = 195; continue _fun00011 }
 174:
                option = report.state;
                zuuluu = 'after';
                michal = 0;
                if(!(zuuluu === option)) { _fun00012_ip = 195; continue _fun00011 }
 189:
                michal = tangon.itemSize;
 195:
                _fun00012_ip = 272; continue _fun00011;
 197:
                zuuluu = report.node;
                verify = zuuluu.parentId;
                option = _closure2_slot0;
                zuuluu = 0;
                if(!(verify !== option)) { _fun00012_ip = 269; continue _fun00011 }
 219:
                option = report.node;
                option = option.id;
                oscard = _closure2_slot0;
                if(!(option === oscard)) { _fun00012_ip = 253; continue _fun00011 }
 238:
                oscard = report.state;
                report = 'after';
                zuuluu = 0;
                if(!(report !== oscard)) { _fun00012_ip = 269; continue _fun00011 }
 253:
                report = tangon.itemSize;
                tangon = -1;
                zuuluu = tangon * report;
 269:
                michal = zuuluu;
 272:
                entity = michal;
 275:
                return entity;
            }
        };
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['useFolderBGHeightOffset'] = michal;
    return entity;
})();