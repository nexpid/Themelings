// app/actions/CreateInviteModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function(argFoo, argBar, argBaz) { // Original name: init
        _fun86308: for(var _fun86308_ip = 0; ; ) switch(_fun86308_ip) {
 0:
            mike = argBaz;
            report = this;
            tango = mike.location;
            entity = undefined;
            if(!(tango === entity)) { _fun86308_ip = 21; continue _fun86308 }
 17:
            tango = '';
 21:
            verify = mike.targetType;
            options = mike.targetUserId;
            golf = mike.targetApplicationId;
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 2;
            mike = oscar[mike];
            oscar = zulu.bind(entity)(mike);
            zulu = oscar.dispatch;
            mike = {};
            offset = 'CREATE_INVITE_MODAL_INIT';
            mike['type'] = offset;
            offset = argFoo;
            mike['guildId'] = offset;
            offset = argBar;
            mike['channelId'] = offset;
            mike['targetType'] = verify;
            mike['targetUserId'] = options;
            mike['targetApplicationId'] = golf;
            mike = zulu.bind(oscar)(mike);
            zulu = report.createInvite;
            mike = true;
            mike = zulu.bind(report)(tango, mike);
            return entity;
        }
    };
    mike['init'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: openSettings
        zulu = _closure1_slot3;
        entity = zulu.getInviteSettings;
        offset = entity.bind(zulu)();
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 2;
        zulu = report[entity];
        entity = undefined;
        golf = tango.bind(entity)(zulu);
        oscar = golf.dispatch;
        zulu = {};
        verify = 'CREATE_INVITE_MODAL_OPEN';
        zulu['type'] = verify;
        yankee = zulu;
        options = copyDataProperties(yankee, offset);
        verify = argFoo;
        options = 'guildId';
        zulu[options] = verify;
        verify = argBar;
        options = 'channelId';
        zulu[options] = verify;
        verify = argCorge;
        options = 'onClose';
        zulu[options] = verify;
        zulu = oscar.bind(golf)(zulu);
        zulu = 3;
        zulu = report[zulu];
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot4;
        zulu = mike.OPEN_MODAL;
        mike = {};
        oscar = 'Instant Invite';
        mike['type'] = oscar;
        oscar = argBaz;
        mike['source'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['openSettings'] = golf;
    golf = function(argFoo) { // Original name: updateSettings
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CREATE_INVITE_MODAL_UPDATE_SETTINGS';
        mike['type'] = report;
        report = argFoo;
        mike['settings'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateSettings'] = golf;
    golf = function() { // Original name: resetSettings
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CREATE_INVITE_MODAL_RESET_SETTINGS';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['resetSettings'] = golf;
    golf = function(argFoo, argBar) { // Original name: createInvite
        _fun86312: for(var _fun86312_ip = 0; ; ) switch(_fun86312_ip) {
 0:
            tango = _closure1_slot3;
            mike = tango.getPendingSettings;
            mike = mike.bind(tango)();
            backup = null;
            if(!(backup != mike)) { _fun86312_ip = 289; continue _fun86312 }
 28:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 2;
            tango = oscar[tango];
            foxtrot = undefined;
            oscar = report.bind(foxtrot)(tango);
            report = oscar.dispatch;
            tango = {};
            golf = 'CREATE_INVITE_MODAL_GENERATE_INVITE';
            tango['type'] = golf;
            tango = report.bind(oscar)(tango);
            oscar = mike.channelId;
            var _closure2_slot0 = oscar;
            kilo = mike.maxAge;
            romeo = mike.maxUses;
            yankee = mike.temporary;
            verify = mike.targetType;
            options = mike.targetUserId;
            golf = mike.targetApplicationId;
            mike = mike.flags;
            report = _closure1_slot3;
            tango = report.getInvite;
            tango = tango.bind(report)();
            report = argBar;
            offset = null;
            if(!report) { _fun86312_ip = 158; continue _fun86312 }
 144:
            report = backup != tango;
            offset = null;
            if(!report) { _fun86312_ip = 158; continue _fun86312 }
 153:
            offset = tango.code;
 158:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 4;
            zulu = report[zulu];
            report = tango.bind(foxtrot)(zulu);
            tango = report.createInvite;
            zulu = {};
            zulu['temporary'] = yankee;
            zulu['validate'] = offset;
            offset = global;
            backup = offset.parseInt;
            yankee = 10;
            backup = backup.bind(foxtrot)(kilo, yankee);
            zulu['max_age'] = backup;
            offset = offset.parseInt;
            offset = offset.bind(foxtrot)(romeo, yankee);
            zulu['max_uses'] = offset;
            zulu['target_type'] = verify;
            zulu['target_user_id'] = options;
            zulu['target_application_id'] = golf;
            zulu['flags'] = mike;
            mike = argFoo;
            tango = tango.bind(report)(oscar, zulu, mike);
            zulu = tango.then;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.dispatch;
                mike = {};
                report = 'CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS';
                mike['type'] = report;
                report = _closure2_slot0;
                mike['channelId'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity = function(argFoo) {
                _fun86314: for(var _fun86314_ip = 0; ; ) switch(_fun86314_ip) {
 0:
                    zulu = argFoo;
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 5;
                    report = options[tango];
                    entity = undefined;
                    report = golf.bind(entity)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    tango = options[tango];
                    tango = golf.bind(entity)(tango);
                    tango = tango.t;
                    tango = tango.WB1ip6;
                    report = report.bind(oscar)(tango);
                    oscar = null;
                    golf = oscar == zulu;
                    tango = undefined;
                    if(golf) { _fun86314_ip = 79; continue _fun86314 }
 74:
                    tango = zulu.message;
 79:
                    if(!(oscar != tango)) { _fun86314_ip = 88; continue _fun86314 }
 83:
                    report = zulu.message;
 88:
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 2;
                    mike = tango[mike];
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.dispatch;
                    mike = {};
                    oscar = 'CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE';
                    mike['type'] = oscar;
                    mike['message'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike, entity);
 289:
            entity = undefined;
            return entity;
        }
    };
    mike['createInvite'] = golf;
    tango = function() { // Original name: close
        _fun86315: for(var _fun86315_ip = 0; ; ) switch(_fun86315_ip) {
 0:
            mike = _closure1_slot3;
            mike = mike.onClose;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.dispatch;
            zulu = {};
            oscar = 'CREATE_INVITE_MODAL_CLOSE';
            zulu['type'] = oscar;
            zulu = tango.bind(report)(zulu);
            zulu = null;
            if(!(zulu != mike)) { _fun86315_ip = 65; continue _fun86315 }
 61:
            mike = mike.bind(entity)();
 65:
            return entity;
        }
    };
    mike['close'] = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/CreateInviteModalActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();