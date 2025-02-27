// app/modules/remixing/native/RemixAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot8;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot8;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getImageId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.local;
            if(entity) { _fun00008_ip = 53; continue _fun00007 }
 12:
            oscard = michal.messageId;
            report = michal.mediaIndex;
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            zuuluu = '';
            entity = '-';
            entity = tangon.bind(zuuluu)(oscard, entity, report);
            _fun00008_ip = 82; continue _fun00007;
 53:
            tangon = michal.uri;
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'local-';
            entity = zuuluu.bind(michal)(tangon);
 82:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: getAllComponentInfo
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = new Array(0);
            zuuluu = new Array(0);
            tangon = _closure1_slot7;
            entity = _closure1_slot5;
            report = entity.currentRenderedCanvas;
            golfie = null;
            verify = golfie == report;
            oscard = undefined;
            entity = undefined;
            if(verify) { _fun00010_ip = 44; continue _fun00009 }
 38:
            entity = report.components;
 44:
            report = tangon.bind(oscard)(entity);
            tangon = report.bind(oscard)();
            entity = tangon.done;
            if(entity) { _fun00010_ip = 129; continue _fun00009 }
 61:
            offset = tangon.value;
            verify = offset.type;
            entity = _closure1_slot11;
            offset = entity.bind(oscard)(offset);
            entity = golfie != verify;
            if(!entity) { _fun00010_ip = 91; continue _fun00009 }
 87:
            entity = golfie != offset;
 91:
            if(!entity) { _fun00010_ip = 114; continue _fun00009 }
 94:
            entity = michal.push;
            entity = entity.bind(michal)(offset);
            entity = zuuluu.push;
            entity = entity.bind(zuuluu)(verify);
 114:
            verify = report.bind(oscard)();
            entity = verify.done;
            tangon = verify;
            if(!entity) { _fun00010_ip = 61; continue _fun00009 }
 129:
            entity = new Array(2);
            entity[0] = zuuluu;
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getSubEffects
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            report = entity.type;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            golfie = 5;
            zuuluu = zuuluu[golfie];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.RemixElement;
            zuuluu = zuuluu.TEXT;
            if(!(zuuluu !== report)) { _fun00012_ip = 281; continue _fun00011 }
 52:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[golfie];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.RemixElement;
            zuuluu = zuuluu.DRAWING;
            if(!(zuuluu !== report)) { _fun00012_ip = 236; continue _fun00011 }
 88:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 6;
            oscard = report[michal];
            option = zuuluu.bind(tangon)(oscard);
            golfie = option.getScaleFromTransforms2d;
            oscard = entity.transform;
            golfie = golfie.bind(option)(oscard);
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getRotateFromTransforms2d;
            michal = entity.transform;
            oscard = zuuluu.bind(tangon)(michal);
            michal = 'scale:none|';
            zuuluu = 1;
            if(!(zuuluu !== golfie)) { _fun00012_ip = 191; continue _fun00011 }
 162:
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            tangon = 'scale:';
            zuuluu = '|';
            michal = report.bind(tangon)(golfie, zuuluu);
 191:
            zuuluu = '' + michal;
            michal = 'rotate:none';
            tangon = 0;
            if(!(tangon !== oscard)) { _fun00012_ip = 230; continue _fun00011 }
 206:
            tangon = global;
            tangon = tangon.HermesInternal;
            report = tangon.concat;
            tangon = 'rotate:';
            michal = report.bind(tangon)(oscard);
 230:
            michal = zuuluu + michal;
            return michal;
 236:
            oscard = entity.color;
            report = entity.strokeWidth;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = 'color:';
            michal = '|strokeWidth:';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 281:
            michal = entity.textParams;
            sizing = michal.backgroundColor;
            michal = entity.textParams;
            backup = michal.color;
            michal = entity.textParams;
            romeon = michal.fontSize;
            entity = entity.textParams;
            offset = entity.fontSource;
            entity = global;
            entity = entity.HermesInternal;
            report = entity.concat;
            output = 'bgColor:';
            kiloes = '|txtColor:';
            foxtra = '|fontsize:';
            yankee = '|fontType:';
            entity = output[report](sizing, kiloes, backup, foxtra, romeon, yankee, offset, verify);
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/native/RemixAnalyticsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useTrackRemixingSurfaceOpenAndExit
        tangon = _closure1_slot4;
        zuuluu = tangon.useEffect;
        michal = function() {
            zuuluu = _closure1_slot5;
            michal = zuuluu.getRemixingSource;
            oscard = michal.bind(zuuluu)();
            var _closure3_slot0 = oscard;
            zuuluu = _closure1_slot5;
            michal = zuuluu.getSessionId;
            verify = michal.bind(zuuluu)();
            var _closure3_slot1 = verify;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 4;
            michal = tangon[michal];
            option = undefined;
            report = zuuluu.bind(option)(michal);
            tangon = report.track;
            michal = _closure1_slot6;
            zuuluu = michal.REMIXING_SURFACE_OPENED;
            michal = {};
            michal['remixing_session_id'] = verify;
            golfie = _closure1_slot9;
            golfie = golfie.bind(option)(oscard);
            michal['image_id'] = golfie;
            golfie = oscard.guildId;
            michal['guild_id'] = golfie;
            oscard = oscard.channelId;
            michal['channel_id'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure1_slot5;
                    entity = michal.getUsedRemix;
                    entity = entity.bind(michal)();
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getUndoEnabled;
                    report = michal.bind(zuuluu)();
                    if(entity) { _fun00014_ip = 121; continue _fun00013 }
 36:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 4;
                    entity = zuuluu[entity];
                    option = undefined;
                    tangon = michal.bind(option)(entity);
                    zuuluu = tangon.track;
                    entity = _closure1_slot6;
                    michal = entity.REMIXING_SURFACE_EXITED;
                    entity = {};
                    verify = _closure3_slot1;
                    entity['remixing_session_id'] = verify;
                    golfie = _closure1_slot9;
                    oscard = _closure3_slot0;
                    oscard = golfie.bind(option)(oscard);
                    entity['image_id'] = oscard;
                    report = !report;
                    entity['no_edits'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 121:
                    entity = undefined;
                    return entity;
                }
            };
            return entity;
        };
        entity = new Array(0);
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    zuuluu['useTrackRemixingSurfaceOpenAndExit'] = tangon;
    tangon = function() { // Original name: trackRemixSurfaceExitModal
        zuuluu = _closure1_slot5;
        entity = zuuluu.getSessionId;
        oscard = entity.bind(zuuluu)();
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIX_SURFACE_EXIT_MODAL;
        michal = {};
        michal['remixing_session_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixSurfaceExitModal'] = tangon;
    tangon = function() { // Original name: trackRemixingSurfaceExitCanceled
        michal = _closure1_slot5;
        entity = michal.getSessionId;
        option = entity.bind(michal)();
        michal = _closure1_slot5;
        entity = michal.getRemixingSource;
        golfie = entity.bind(michal)();
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIXING_SURFACE_EXIT_CANCELED;
        michal = {};
        michal['remixing_session_id'] = option;
        oscard = _closure1_slot9;
        oscard = oscard.bind(entity)(golfie);
        michal['image_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixingSurfaceExitCanceled'] = tangon;
    tangon = function() { // Original name: trackRemixDownloaded
        michal = _closure1_slot5;
        entity = michal.getSessionId;
        offset = entity.bind(michal)();
        michal = _closure1_slot5;
        entity = michal.getRemixingSource;
        verify = entity.bind(michal)();
        michal = _closure1_slot10;
        entity = undefined;
        tangon = michal.bind(entity)();
        zuuluu = _closure1_slot3;
        michal = 2;
        zuuluu = zuuluu.bind(entity)(tangon, michal);
        michal = 0;
        golfie = zuuluu[michal];
        michal = 1;
        oscard = zuuluu[michal];
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 4;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIX_DOWNLOADED;
        michal = {};
        michal['remixing_session_id'] = offset;
        option = _closure1_slot9;
        option = option.bind(entity)(verify);
        michal['image_id'] = option;
        michal['components'] = golfie;
        michal['sub_effects'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixDownloaded'] = tangon;
    tangon = function() { // Original name: trackRemixSent
        michal = _closure1_slot5;
        entity = michal.getSessionId;
        romeon = entity.bind(michal)();
        michal = _closure1_slot5;
        entity = michal.getRemixingSource;
        yankee = entity.bind(michal)();
        michal = _closure1_slot10;
        entity = undefined;
        tangon = michal.bind(entity)();
        zuuluu = _closure1_slot3;
        michal = 2;
        zuuluu = zuuluu.bind(entity)(tangon, michal);
        michal = 0;
        verify = zuuluu[michal];
        michal = 1;
        option = zuuluu[michal];
        zuuluu = _closure1_slot5;
        michal = zuuluu.getStartTime;
        golfie = michal.bind(zuuluu)();
        michal = global;
        michal = michal.Date;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        kiloes = zuuluu;
        michal = new kiloes[michal](backup);
        zuuluu = michal instanceof Object ? michal : zuuluu;
        michal = zuuluu.getTime;
        oscard = michal.bind(zuuluu)();
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 4;
        michal = tangon[michal];
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIX_SENT;
        michal = {};
        michal['remixing_session_id'] = romeon;
        offset = _closure1_slot9;
        offset = offset.bind(entity)(yankee);
        michal['image_id'] = offset;
        michal['components'] = verify;
        michal['sub_effects'] = option;
        golfie = oscard - golfie;
        oscard = 1000;
        oscard = golfie / oscard;
        michal['duration'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixSent'] = tangon;
    tangon = function(argFoo) { // Original name: trackRemixingComponentToolOpened
        zuuluu = _closure1_slot5;
        entity = zuuluu.getSessionId;
        oscard = entity.bind(zuuluu)();
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIXING_COMPONENT_TOOL_OPENED;
        michal = {};
        michal['remixing_session_id'] = oscard;
        oscard = argFoo;
        michal['component_type'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixingComponentToolOpened'] = tangon;
    tangon = function(argFoo) { // Original name: trackRemixingComponentAdded
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot5;
            entity = zuuluu.getSessionId;
            option = entity.bind(zuuluu)();
            oscard = tangon.type;
            zuuluu = _closure1_slot11;
            entity = undefined;
            golfie = zuuluu.bind(entity)(tangon);
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00016_ip = 108; continue _fun00015 }
 42:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot6;
            zuuluu = michal.REMIXING_COMPONENT_ADDED;
            michal = {};
            michal['remixing_session_id'] = option;
            michal['component_type'] = oscard;
            oscard = new Array(1);
            oscard[0] = golfie;
            michal['sub_effects'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 108:
            return entity;
        }
    };
    zuuluu['trackRemixingComponentAdded'] = tangon;
    tangon = function(argFoo) { // Original name: trackRemixingUpsellAccepted
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIXING_UPSELL_ACCEPTED;
        michal = {};
        oscard = argFoo;
        michal['location'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixingUpsellAccepted'] = tangon;
    tangon = function(argFoo) { // Original name: trackRemixingUpsellDismissed
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIXING_UPSELL_DISMISSED;
        michal = {};
        oscard = argFoo;
        michal['location'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixingUpsellDismissed'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: trackRemixingComponentToolCanceled
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argBar;
            if(!entity) { _fun00018_ip = 77; continue _fun00017 }
 6:
            zuuluu = _closure1_slot5;
            entity = zuuluu.getLastComponentAdded;
            tangon = entity.bind(zuuluu)();
            entity = null;
            report = entity == tangon;
            entity = undefined;
            zuuluu = undefined;
            if(report) { _fun00018_ip = 41; continue _fun00017 }
 36:
            zuuluu = tangon.type;
 41:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 5;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.RemixElement;
            michal = michal.DRAWING;
            if(!(zuuluu !== michal)) { _fun00018_ip = 154; continue _fun00017 }
 77:
            tangon = _closure1_slot5;
            michal = tangon.getSessionId;
            golfie = michal.bind(tangon)();
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 4;
            tangon = tangon[michal];
            michal = undefined;
            oscard = report.bind(michal)(tangon);
            report = oscard.track;
            zuuluu = _closure1_slot6;
            tangon = zuuluu.REMIXING_COMPONENT_TOOL_CANCELED;
            zuuluu = {};
            zuuluu['remixing_session_id'] = golfie;
            golfie = argFoo;
            zuuluu['component_type'] = golfie;
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            return michal;
 154:
            return entity;
        }
    };
    zuuluu['trackRemixingComponentToolCanceled'] = tangon;
    tangon = function() { // Original name: trackRemixingActionRedone
        zuuluu = _closure1_slot5;
        entity = zuuluu.getSessionId;
        oscard = entity.bind(zuuluu)();
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIXING_ACTION_REDONE;
        michal = {};
        michal['remixing_session_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixingActionRedone'] = tangon;
    michal = function() { // Original name: trackRemixingActionUndone
        zuuluu = _closure1_slot5;
        entity = zuuluu.getSessionId;
        oscard = entity.bind(zuuluu)();
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot6;
        zuuluu = michal.REMIXING_ACTION_UNDONE;
        michal = {};
        michal['remixing_session_id'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackRemixingActionUndone'] = michal;
    return entity;
})();