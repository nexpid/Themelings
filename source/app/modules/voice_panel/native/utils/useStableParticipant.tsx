// app/modules/voice_panel/native/utils/useStableParticipant.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscar = function(argFoo) { // Original name: isStableStreamParticipant
        _fun121799: for(var _fun121799_ip = 0; ; ) switch(_fun121799_ip) {
 0:
            oscar = argFoo;
            entity = global;
            zulu = entity.Boolean;
            report = null;
            entity = report == oscar;
            mike = undefined;
            golf = undefined;
            if(entity) { _fun121799_ip = 29; continue _fun121799 }
 24:
            golf = oscar.type;
 29:
            entity = _closure1_slot7;
            entity = entity.STREAM;
            entity = golf === entity;
            if(entity) { _fun121799_ip = 77; continue _fun121799 }
 49:
            golf = report == oscar;
            report = undefined;
            if(golf) { _fun121799_ip = 63; continue _fun121799 }
 58:
            report = oscar.type;
 63:
            tango = _closure1_slot7;
            tango = tango.HIDDEN_STREAM;
            entity = report === tango;
 77:
            entity = zulu.bind(mike)(entity);
            return entity;
        }
    };
    var _closure1_slot8 = oscar;
    report = function(argFoo) { // Original name: isStableUserParticipant
        _fun121800: for(var _fun121800_ip = 0; ; ) switch(_fun121800_ip) {
 0:
            entity = argFoo;
            mike = global;
            zulu = mike.Boolean;
            mike = null;
            report = mike == entity;
            mike = undefined;
            tango = undefined;
            if(report) { _fun121800_ip = 29; continue _fun121800 }
 24:
            tango = entity.type;
 29:
            entity = _closure1_slot7;
            entity = entity.USER;
            entity = tango === entity;
            entity = zulu.bind(mike)(entity);
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tango = function(argFoo) { // Original name: isStableActivityParticipant
        _fun121801: for(var _fun121801_ip = 0; ; ) switch(_fun121801_ip) {
 0:
            entity = argFoo;
            mike = global;
            zulu = mike.Boolean;
            mike = null;
            report = mike == entity;
            mike = undefined;
            tango = undefined;
            if(report) { _fun121801_ip = 29; continue _fun121801 }
 24:
            tango = entity.type;
 29:
            entity = _closure1_slot7;
            entity = entity.ACTIVITY;
            entity = tango === entity;
            entity = zulu.bind(mike)(entity);
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = function(argFoo, argBar) { // Original name: areStableParticipantsEqual
        _fun121802: for(var _fun121802_ip = 0; ; ) switch(_fun121802_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = oscar === report;
            if(entity) { _fun121802_ip = 63; continue _fun121802 }
 13:
            zulu = null;
            mike = zulu != oscar;
            if(!mike) { _fun121802_ip = 26; continue _fun121802 }
 22:
            mike = zulu != report;
 26:
            if(!mike) { _fun121802_ip = 60; continue _fun121802 }
 29:
            golf = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 5;
            zulu = tango[zulu];
            tango = undefined;
            zulu = golf.bind(tango)(zulu);
            mike = zulu.bind(tango)(oscar, report);
 60:
            entity = mike;
 63:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 4;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.ParticipantTypes;
    var _closure1_slot7 = golf;
    golf = 9;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/voice_panel/native/utils/useStableParticipant.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo, argBar, argBaz) { // Original name: useStableParticipant
        verify = argFoo;
        options = argBar;
        golf = argBaz;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = options;
        var _closure2_slot2 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 6;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot3;
        tango = new Array(4);
        tango[0] = zulu;
        zulu = _closure1_slot6;
        tango[1] = zulu;
        zulu = _closure1_slot4;
        tango[2] = zulu;
        zulu = _closure1_slot5;
        tango[3] = zulu;
        zulu = new Array(3);
        zulu[0] = verify;
        zulu[1] = options;
        zulu[2] = golf;
        offset = _closure1_slot11;
        romeo = function() {
            _fun121804: for(var _fun121804_ip = 0; ; ) switch(_fun121804_ip) {
 0:
                entity = _closure2_slot0;
                mike = null;
                if(!(mike != entity)) { _fun121804_ip = 159; continue _fun121804 }
 16:
                report = _closure1_slot3;
                tango = report.getParticipant;
                zulu = _closure2_slot1;
                entity = _closure2_slot0;
                zulu = tango.bind(report)(zulu, entity);
                report = mike != zulu;
                entity = undefined;
                tango = undefined;
                if(!report) { _fun121804_ip = 57; continue _fun121804 }
 54:
                tango = zulu;
 57:
                if(!(mike != tango)) { _fun121804_ip = 511; continue _fun121804 }
 64:
                report = _closure1_slot1;
                options = _closure1_slot2;
                zulu = 8;
                zulu = options[zulu];
                zulu = report.bind(entity)(zulu);
                verify = zulu.bind(entity)(tango);
                report = tango.type;
                zulu = _closure1_slot7;
                zulu = zulu.ACTIVITY;
                if(!(zulu !== report)) { _fun121804_ip = 481; continue _fun121804 }
 111:
                zulu = _closure1_slot7;
                zulu = zulu.STREAM;
                if(!(zulu !== report)) { _fun121804_ip = 351; continue _fun121804 }
 128:
                zulu = _closure1_slot7;
                zulu = zulu.HIDDEN_STREAM;
                if(!(zulu !== report)) { _fun121804_ip = 351; continue _fun121804 }
 145:
                zulu = _closure1_slot7;
                zulu = zulu.USER;
                if(!(zulu !== report)) { _fun121804_ip = 163; continue _fun121804 }
 159:
                zulu = undefined;
                return zulu;
 163:
                zulu = tango.user;
                options = zulu.id;
                report = _closure1_slot4;
                zulu = report.getId;
                report = zulu.bind(report)();
                zulu = {};
                offset = tango.type;
                zulu['type'] = offset;
                offset = _closure2_slot0;
                zulu['id'] = offset;
                offset = tango.user;
                zulu['user'] = offset;
                offset = tango.voiceState;
                romeo = mike == offset;
                yankee = undefined;
                if(romeo) { _fun121804_ip = 236; continue _fun121804 }
 230:
                yankee = offset.selfVideo;
 236:
                offset = mike != yankee;
                if(!offset) { _fun121804_ip = 246; continue _fun121804 }
 243:
                offset = yankee;
 246:
                zulu['selfVideo'] = offset;
                offset = tango.userNick;
                zulu['userNick'] = offset;
                yankee = tango.streamId;
                romeo = mike != yankee;
                offset = undefined;
                if(!romeo) { _fun121804_ip = 280; continue _fun121804 }
 277:
                offset = yankee;
 280:
                zulu['streamId'] = offset;
                offset = tango.ringing;
                zulu['ringing'] = offset;
                zulu['hasVideo'] = verify;
                offset = verify;
                if(!offset) { _fun121804_ip = 335; continue _fun121804 }
 307:
                foxtrot = _closure1_slot5;
                romeo = foxtrot.isLocalVideoDisabled;
                yankee = tango.user;
                yankee = yankee.id;
                yankee = romeo.bind(foxtrot)(yankee);
                offset = !yankee;
 335:
                zulu['canRenderVideo'] = offset;
                report = options === report;
                zulu['isSelf'] = report;
                return zulu;
 351:
                zulu = tango.user;
                options = zulu.id;
                report = _closure1_slot4;
                zulu = report.getId;
                report = zulu.bind(report)();
                zulu = {};
                offset = tango.type;
                zulu['type'] = offset;
                offset = _closure2_slot0;
                zulu['id'] = offset;
                offset = tango.user;
                zulu['user'] = offset;
                offset = tango.userNick;
                zulu['userNick'] = offset;
                yankee = tango.streamId;
                romeo = mike != yankee;
                offset = undefined;
                if(!romeo) { _fun121804_ip = 432; continue _fun121804 }
 429:
                offset = yankee;
 432:
                zulu['streamId'] = offset;
                offset = tango.stream;
                yankee = offset.guildId;
                romeo = mike != yankee;
                offset = undefined;
                if(!romeo) { _fun121804_ip = 460; continue _fun121804 }
 457:
                offset = yankee;
 460:
                zulu['streamGuildId'] = offset;
                zulu['hasVideo'] = verify;
                report = options === report;
                zulu['isSelf'] = report;
                return zulu;
 481:
                zulu = {};
                report = tango.type;
                zulu['type'] = report;
                report = _closure2_slot0;
                zulu['id'] = report;
                tango = tango.applicationId;
                zulu['applicationId'] = tango;
                return zulu;
 511:
                report = _closure1_slot6;
                tango = report.getUser;
                zulu = _closure2_slot0;
                offset = tango.bind(report)(zulu);
                if(!(mike != offset)) { _fun121804_ip = 668; continue _fun121804 }
 537:
                tango = offset.id;
                zulu = _closure1_slot4;
                mike = zulu.getId;
                zulu = mike.bind(zulu)();
                mike = {};
                report = _closure1_slot7;
                report = report.USER;
                mike['type'] = report;
                report = _closure2_slot0;
                mike['id'] = report;
                mike['user'] = offset;
                report = false;
                mike['selfVideo'] = report;
                mike['canRenderVideo'] = report;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                golf = 7;
                golf = verify[golf];
                verify = options.bind(entity)(golf);
                options = verify.getName;
                golf = _closure2_slot2;
                oscar = _closure2_slot1;
                oscar = options.bind(verify)(golf, oscar, offset);
                mike['userNick'] = oscar;
                mike['streamId'] = entity;
                mike['ringing'] = report;
                mike['hasVideo'] = report;
                zulu = tango === zulu;
                mike['isSelf'] = zulu;
                return mike;
 668:
                return entity;
            }
        };
        backup = oscar;
        foxtrot = tango;
        yankee = zulu;
        entity = backup[report](foxtrot, romeo, yankee, offset, verify);
        return entity;
    };
    zulu['default'] = golf;
    zulu['isStableStreamParticipant'] = oscar;
    zulu['isStableUserParticipant'] = report;
    zulu['isStableActivityParticipant'] = tango;
    tango = function(argFoo) { // Original name: isStableParticipantWithUser
        _fun121805: for(var _fun121805_ip = 0; ; ) switch(_fun121805_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot8;
            zulu = undefined;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun121805_ip = 29; continue _fun121805 }
 20:
            mike = _closure1_slot9;
            entity = mike.bind(zulu)(tango);
 29:
            return entity;
        }
    };
    zulu['isStableParticipantWithUser'] = tango;
    mike = function(argFoo) { // Original name: stableParticipantHasVideo
        _fun121806: for(var _fun121806_ip = 0; ; ) switch(_fun121806_ip) {
 0:
            zulu = argFoo;
            entity = _closure1_slot10;
            tango = undefined;
            entity = entity.bind(tango)(zulu);
            entity = !entity;
            if(!entity) { _fun121806_ip = 58; continue _fun121806 }
 23:
            mike = _closure1_slot8;
            mike = mike.bind(tango)(zulu);
            if(mike) { _fun121806_ip = 43; continue _fun121806 }
 35:
            mike = zulu.selfVideo;
            _fun121806_ip = 55; continue _fun121806;
 43:
            tango = zulu.streamId;
            zulu = null;
            mike = zulu != tango;
 55:
            entity = mike;
 58:
            return entity;
        }
    };
    zulu['stableParticipantHasVideo'] = mike;
    return entity;
})();