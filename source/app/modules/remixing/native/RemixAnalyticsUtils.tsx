// app/modules/remixing/native/RemixAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun82272: for(var _fun82272_ip = 0; ; ) switch(_fun82272_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun82272_ip = 46; continue _fun82272 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun82272_ip = 55; continue _fun82272 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun82272_ip = 345; continue _fun82272 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun82272_ip = 323; continue _fun82272 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun82272_ip = 283; continue _fun82272 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun82272_ip = 270; continue _fun82272 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun82272_ip = 163; continue _fun82272 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun82272_ip = 179; continue _fun82272 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun82272_ip = 249; continue _fun82272 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun82272_ip = 249; continue _fun82272 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun82272_ip = 234; continue _fun82272 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun82272_ip = 247; continue _fun82272 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun82272_ip = 265; continue _fun82272;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun82272_ip = 283; continue _fun82272;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun82272_ip = 323; continue _fun82272 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun82272_ip = 330; continue _fun82272 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun82273: for(var _fun82273_ip = 0; ; ) switch(_fun82273_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun82273_ip = 56; continue _fun82273 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun82273_ip = 67; continue _fun82273;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun82274: for(var _fun82274_ip = 0; ; ) switch(_fun82274_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun82274_ip = 23; continue _fun82274 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun82274_ip = 33; continue _fun82274 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun82274_ip = 70; continue _fun82274 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun82274_ip = 55; continue _fun82274 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getImageId
        _fun82275: for(var _fun82275_ip = 0; ; ) switch(_fun82275_ip) {
 0:
            mike = argFoo;
            entity = mike.local;
            if(entity) { _fun82275_ip = 53; continue _fun82275 }
 12:
            oscar = mike.messageId;
            report = mike.mediaIndex;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            zulu = '';
            entity = '-';
            entity = tango.bind(zulu)(oscar, entity, report);
            _fun82275_ip = 83; continue _fun82275;
 53:
            tango = mike.uri;
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'local-';
            entity = zulu.bind(mike)(tango);
 83:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: getAllComponentInfo
        _fun82276: for(var _fun82276_ip = 0; ; ) switch(_fun82276_ip) {
 0:
            mike = new Array(0);
            zulu = new Array(0);
            tango = _closure1_slot7;
            entity = _closure1_slot5;
            report = entity.currentRenderedCanvas;
            golf = null;
            verify = golf == report;
            oscar = undefined;
            entity = undefined;
            if(verify) { _fun82276_ip = 44; continue _fun82276 }
 38:
            entity = report.components;
 44:
            report = tango.bind(oscar)(entity);
            tango = report.bind(oscar)();
            entity = tango.done;
            if(entity) { _fun82276_ip = 129; continue _fun82276 }
 61:
            offset = tango.value;
            verify = offset.type;
            entity = _closure1_slot11;
            offset = entity.bind(oscar)(offset);
            entity = golf != verify;
            if(!entity) { _fun82276_ip = 91; continue _fun82276 }
 87:
            entity = golf != offset;
 91:
            if(!entity) { _fun82276_ip = 114; continue _fun82276 }
 94:
            entity = mike.push;
            entity = entity.bind(mike)(offset);
            entity = zulu.push;
            entity = entity.bind(zulu)(verify);
 114:
            verify = report.bind(oscar)();
            entity = verify.done;
            tango = verify;
            if(!entity) { _fun82276_ip = 61; continue _fun82276 }
 129:
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getSubEffects
        _fun82277: for(var _fun82277_ip = 0; ; ) switch(_fun82277_ip) {
 0:
            entity = argFoo;
            report = entity.type;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            golf = 5;
            zulu = zulu[golf];
            tango = undefined;
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.RemixElement;
            zulu = zulu.TEXT;
            if(!(zulu !== report)) { _fun82277_ip = 281; continue _fun82277 }
 52:
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[golf];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.RemixElement;
            zulu = zulu.DRAWING;
            if(!(zulu !== report)) { _fun82277_ip = 236; continue _fun82277 }
 88:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 6;
            oscar = report[mike];
            options = zulu.bind(tango)(oscar);
            golf = options.getScaleFromTransforms2d;
            oscar = entity.transform;
            golf = golf.bind(options)(oscar);
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.getRotateFromTransforms2d;
            mike = entity.transform;
            oscar = zulu.bind(tango)(mike);
            mike = 'scale:none|';
            zulu = 1;
            if(!(zulu !== golf)) { _fun82277_ip = 191; continue _fun82277 }
 162:
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = 'scale:';
            zulu = '|';
            mike = report.bind(tango)(golf, zulu);
 191:
            zulu = '' + mike;
            mike = 'rotate:none';
            tango = 0;
            if(!(tango !== oscar)) { _fun82277_ip = 230; continue _fun82277 }
 206:
            tango = global;
            tango = tango.HermesInternal;
            report = tango.concat;
            tango = 'rotate:';
            mike = report.bind(tango)(oscar);
 230:
            mike = zulu + mike;
            return mike;
 236:
            oscar = entity.color;
            report = entity.strokeWidth;
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = 'color:';
            mike = '|strokeWidth:';
            mike = tango.bind(zulu)(oscar, mike, report);
            return mike;
 281:
            mike = entity.textParams;
            sizing = mike.backgroundColor;
            mike = entity.textParams;
            backup = mike.color;
            mike = entity.textParams;
            romeo = mike.fontSize;
            entity = entity.textParams;
            offset = entity.fontSource;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            output = 'bgColor:';
            kilo = '|txtColor:';
            foxtrot = '|fontsize:';
            yankee = '|fontType:';
            entity = output[report](sizing, kilo, backup, foxtrot, romeo, yankee, offset, verify);
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot6 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/RemixAnalyticsUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useTrackRemixingSurfaceOpenAndExit
        tango = _closure1_slot4;
        zulu = tango.useEffect;
        mike = function() {
            zulu = _closure1_slot5;
            mike = zulu.getRemixingSource;
            oscar = mike.bind(zulu)();
            var _closure3_slot0 = oscar;
            zulu = _closure1_slot5;
            mike = zulu.getSessionId;
            verify = mike.bind(zulu)();
            var _closure3_slot1 = verify;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 4;
            mike = tango[mike];
            options = undefined;
            report = zulu.bind(options)(mike);
            tango = report.track;
            mike = _closure1_slot6;
            zulu = mike.REMIXING_SURFACE_OPENED;
            mike = {};
            mike['remixing_session_id'] = verify;
            golf = _closure1_slot9;
            golf = golf.bind(options)(oscar);
            mike['image_id'] = golf;
            golf = oscar.guildId;
            mike['guild_id'] = golf;
            oscar = oscar.channelId;
            mike['channel_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            entity = function() {
                _fun82280: for(var _fun82280_ip = 0; ; ) switch(_fun82280_ip) {
 0:
                    mike = _closure1_slot5;
                    entity = mike.getUsedRemix;
                    entity = entity.bind(mike)();
                    zulu = _closure1_slot5;
                    mike = zulu.getUndoEnabled;
                    report = mike.bind(zulu)();
                    if(entity) { _fun82280_ip = 121; continue _fun82280 }
 36:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 4;
                    entity = zulu[entity];
                    options = undefined;
                    tango = mike.bind(options)(entity);
                    zulu = tango.track;
                    entity = _closure1_slot6;
                    mike = entity.REMIXING_SURFACE_EXITED;
                    entity = {};
                    verify = _closure3_slot1;
                    entity['remixing_session_id'] = verify;
                    golf = _closure1_slot9;
                    oscar = _closure3_slot0;
                    oscar = golf.bind(options)(oscar);
                    entity['image_id'] = oscar;
                    report = !report;
                    entity['no_edits'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            return entity;
        };
        entity = new Array(0);
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    zulu['useTrackRemixingSurfaceOpenAndExit'] = tango;
    tango = function() { // Original name: trackRemixSurfaceExitModal
        zulu = _closure1_slot5;
        entity = zulu.getSessionId;
        oscar = entity.bind(zulu)();
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIX_SURFACE_EXIT_MODAL;
        mike = {};
        mike['remixing_session_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixSurfaceExitModal'] = tango;
    tango = function() { // Original name: trackRemixingSurfaceExitCanceled
        mike = _closure1_slot5;
        entity = mike.getSessionId;
        options = entity.bind(mike)();
        mike = _closure1_slot5;
        entity = mike.getRemixingSource;
        golf = entity.bind(mike)();
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIXING_SURFACE_EXIT_CANCELED;
        mike = {};
        mike['remixing_session_id'] = options;
        oscar = _closure1_slot9;
        oscar = oscar.bind(entity)(golf);
        mike['image_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixingSurfaceExitCanceled'] = tango;
    tango = function() { // Original name: trackRemixDownloaded
        mike = _closure1_slot5;
        entity = mike.getSessionId;
        offset = entity.bind(mike)();
        mike = _closure1_slot5;
        entity = mike.getRemixingSource;
        verify = entity.bind(mike)();
        mike = _closure1_slot10;
        entity = undefined;
        tango = mike.bind(entity)();
        zulu = _closure1_slot3;
        mike = 2;
        zulu = zulu.bind(entity)(tango, mike);
        mike = 0;
        golf = zulu[mike];
        mike = 1;
        oscar = zulu[mike];
        zulu = _closure1_slot1;
        tango = _closure1_slot2;
        mike = 4;
        mike = tango[mike];
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIX_DOWNLOADED;
        mike = {};
        mike['remixing_session_id'] = offset;
        options = _closure1_slot9;
        options = options.bind(entity)(verify);
        mike['image_id'] = options;
        mike['components'] = golf;
        mike['sub_effects'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixDownloaded'] = tango;
    tango = function() { // Original name: trackRemixSent
        mike = _closure1_slot5;
        entity = mike.getSessionId;
        romeo = entity.bind(mike)();
        mike = _closure1_slot5;
        entity = mike.getRemixingSource;
        yankee = entity.bind(mike)();
        mike = _closure1_slot10;
        entity = undefined;
        tango = mike.bind(entity)();
        zulu = _closure1_slot3;
        mike = 2;
        zulu = zulu.bind(entity)(tango, mike);
        mike = 0;
        verify = zulu[mike];
        mike = 1;
        options = zulu[mike];
        zulu = _closure1_slot5;
        mike = zulu.getStartTime;
        golf = mike.bind(zulu)();
        mike = global;
        mike = mike.Date;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        kilo = zulu;
        mike = new kilo[mike](backup);
        zulu = mike instanceof Object ? mike : zulu;
        mike = zulu.getTime;
        oscar = mike.bind(zulu)();
        zulu = _closure1_slot1;
        tango = _closure1_slot2;
        mike = 4;
        mike = tango[mike];
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIX_SENT;
        mike = {};
        mike['remixing_session_id'] = romeo;
        offset = _closure1_slot9;
        offset = offset.bind(entity)(yankee);
        mike['image_id'] = offset;
        mike['components'] = verify;
        mike['sub_effects'] = options;
        golf = oscar - golf;
        oscar = 1000;
        oscar = golf / oscar;
        mike['duration'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixSent'] = tango;
    tango = function(argFoo) { // Original name: trackRemixingComponentToolOpened
        zulu = _closure1_slot5;
        entity = zulu.getSessionId;
        oscar = entity.bind(zulu)();
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIXING_COMPONENT_TOOL_OPENED;
        mike = {};
        mike['remixing_session_id'] = oscar;
        oscar = argFoo;
        mike['component_type'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixingComponentToolOpened'] = tango;
    tango = function(argFoo) { // Original name: trackRemixingComponentAdded
        _fun82286: for(var _fun82286_ip = 0; ; ) switch(_fun82286_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot5;
            entity = zulu.getSessionId;
            options = entity.bind(zulu)();
            oscar = tango.type;
            zulu = _closure1_slot11;
            entity = undefined;
            golf = zulu.bind(entity)(tango);
            zulu = null;
            if(!(zulu != golf)) { _fun82286_ip = 108; continue _fun82286 }
 42:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 4;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot6;
            zulu = mike.REMIXING_COMPONENT_ADDED;
            mike = {};
            mike['remixing_session_id'] = options;
            mike['component_type'] = oscar;
            oscar = new Array(1);
            oscar[0] = golf;
            mike['sub_effects'] = oscar;
            mike = tango.bind(report)(zulu, mike);
 108:
            return entity;
        }
    };
    zulu['trackRemixingComponentAdded'] = tango;
    tango = function(argFoo) { // Original name: trackRemixingUpsellAccepted
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIXING_UPSELL_ACCEPTED;
        mike = {};
        oscar = argFoo;
        mike['location'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixingUpsellAccepted'] = tango;
    tango = function(argFoo) { // Original name: trackRemixingUpsellDismissed
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIXING_UPSELL_DISMISSED;
        mike = {};
        oscar = argFoo;
        mike['location'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixingUpsellDismissed'] = tango;
    tango = function(argFoo, argBar) { // Original name: trackRemixingComponentToolCanceled
        _fun82289: for(var _fun82289_ip = 0; ; ) switch(_fun82289_ip) {
 0:
            entity = argBar;
            if(!entity) { _fun82289_ip = 77; continue _fun82289 }
 6:
            zulu = _closure1_slot5;
            entity = zulu.getLastComponentAdded;
            tango = entity.bind(zulu)();
            entity = null;
            report = entity == tango;
            entity = undefined;
            zulu = undefined;
            if(report) { _fun82289_ip = 41; continue _fun82289 }
 36:
            zulu = tango.type;
 41:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 5;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.RemixElement;
            mike = mike.DRAWING;
            if(!(zulu !== mike)) { _fun82289_ip = 154; continue _fun82289 }
 77:
            tango = _closure1_slot5;
            mike = tango.getSessionId;
            golf = mike.bind(tango)();
            report = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 4;
            tango = tango[mike];
            mike = undefined;
            oscar = report.bind(mike)(tango);
            report = oscar.track;
            zulu = _closure1_slot6;
            tango = zulu.REMIXING_COMPONENT_TOOL_CANCELED;
            zulu = {};
            zulu['remixing_session_id'] = golf;
            golf = argFoo;
            zulu['component_type'] = golf;
            zulu = report.bind(oscar)(tango, zulu);
            return mike;
 154:
            return entity;
        }
    };
    zulu['trackRemixingComponentToolCanceled'] = tango;
    tango = function() { // Original name: trackRemixingActionRedone
        zulu = _closure1_slot5;
        entity = zulu.getSessionId;
        oscar = entity.bind(zulu)();
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIXING_ACTION_REDONE;
        mike = {};
        mike['remixing_session_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixingActionRedone'] = tango;
    mike = function() { // Original name: trackRemixingActionUndone
        zulu = _closure1_slot5;
        entity = zulu.getSessionId;
        oscar = entity.bind(zulu)();
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot6;
        zulu = mike.REMIXING_ACTION_UNDONE;
        mike = {};
        mike['remixing_session_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackRemixingActionUndone'] = mike;
    return entity;
})();