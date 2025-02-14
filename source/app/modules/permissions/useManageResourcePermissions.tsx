// app/modules/permissions/useManageResourcePermissions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    options = argCorge;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
    var _closure1_slot8 = report;
    report = tango.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS;
    var _closure1_slot9 = report;
    tango = tango.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot11 = tango;
    tango = {'canCreateExpressions': false, 'canCreateGuildEvent': false, 'canManageAllExpressions': false, 'canManageAllEvents': false};
    report = function() { // Original name: canManageGuildExpression
        entity = false;
        return entity;
    };
    tango['canManageGuildExpression'] = report;
    report = function() { // Original name: canManageGuildEvent
        entity = false;
        return entity;
    };
    tango['canManageGuildEvent'] = report;
    var _closure1_slot12 = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: canManageResource
        _fun76124: for(var _fun76124_ip = 0; ; ) switch(_fun76124_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            tango = argCorge;
            golf = null;
            entity = golf != oscar;
            if(!entity) { _fun76124_ip = 181; continue _fun76124 }
 21:
            mike = argBaz;
            zulu = !mike;
            mike = !zulu;
            if(!zulu) { _fun76124_ip = 178; continue _fun76124 }
 36:
            zulu = 'creator_id';
            zulu = zulu in oscar;
            if(zulu) { _fun76124_ip = 147; continue _fun76124 }
 47:
            zulu = 'userId';
            zulu = zulu in oscar;
            if(zulu) { _fun76124_ip = 115; continue _fun76124 }
 58:
            zulu = 'user';
            zulu = zulu in oscar;
            if(!zulu) { _fun76124_ip = 113; continue _fun76124 }
 69:
            options = tango;
            if(!tango) { _fun76124_ip = 79; continue _fun76124 }
 75:
            options = golf != report;
 79:
            if(!options) { _fun76124_ip = 110; continue _fun76124 }
 82:
            verify = oscar.user;
            yankee = golf == verify;
            offset = undefined;
            if(yankee) { _fun76124_ip = 101; continue _fun76124 }
 96:
            offset = verify.id;
 101:
            verify = report.id;
            options = offset === verify;
 110:
            zulu = options;
 113:
            _fun76124_ip = 145; continue _fun76124;
 115:
            options = tango;
            if(!tango) { _fun76124_ip = 125; continue _fun76124 }
 121:
            options = golf != report;
 125:
            if(!options) { _fun76124_ip = 142; continue _fun76124 }
 128:
            offset = oscar.userId;
            verify = report.id;
            options = offset === verify;
 142:
            zulu = options;
 145:
            _fun76124_ip = 175; continue _fun76124;
 147:
            if(!tango) { _fun76124_ip = 154; continue _fun76124 }
 150:
            tango = golf != report;
 154:
            if(!tango) { _fun76124_ip = 172; continue _fun76124 }
 157:
            oscar = oscar.creator_id;
            report = report.id;
            tango = oscar === report;
 172:
            zulu = tango;
 175:
            mike = zulu;
 178:
            entity = mike;
 181:
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    tango = function(argFoo) { // Original name: attachChannelPermissions
        _fun76125: for(var _fun76125_ip = 0; ; ) switch(_fun76125_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity != zulu)) { _fun76125_ip = 140; continue _fun76125 }
 12:
            report = _closure1_slot8;
            mike = zulu.isGuildStageVoice;
            mike = mike.bind(zulu)();
            if(mike) { _fun76125_ip = 51; continue _fun76125 }
 32:
            mike = zulu.isGuildVoice;
            mike = mike.bind(zulu)();
            if(!mike) { _fun76125_ip = 55; continue _fun76125 }
 45:
            report = _closure1_slot10;
            _fun76125_ip = 55; continue _fun76125;
 51:
            report = _closure1_slot9;
 55:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 7;
            mike = golf[zulu];
            tango = undefined;
            verify = oscar.bind(tango)(mike);
            options = verify.combine;
            mike = _closure1_slot11;
            entity = mike.CREATE_EVENTS;
            options = options.bind(verify)(report, entity);
            entity = new Array(2);
            entity[0] = options;
            zulu = golf[zulu];
            tango = oscar.bind(tango)(zulu);
            zulu = tango.combine;
            mike = mike.MANAGE_EVENTS;
            mike = zulu.bind(tango)(report, mike);
            entity[1] = mike;
            return entity;
 140:
            mike = _closure1_slot11;
            zulu = mike.CREATE_EVENTS;
            entity = new Array(2);
            entity[0] = zulu;
            mike = mike.MANAGE_EVENTS;
            entity[1] = mike;
            return entity;
        }
    };
    var _closure1_slot14 = tango;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/permissions/useManageResourcePermissions.tsx';
    report = oscar.bind(golf)(report);
    zulu['attachChannelPermissions'] = tango;
    tango = function(argFoo) {
        _fun76126: for(var _fun76126_ip = 0; ; ) switch(_fun76126_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            zulu = _closure1_slot5;
            zulu = verify instanceof zulu;
            if(zulu) { _fun76126_ip = 36; continue _fun76126 }
 23:
            tango = _closure1_slot14;
            zulu = undefined;
            zulu = tango.bind(zulu)(verify);
            _fun76126_ip = 67; continue _fun76126;
 36:
            report = _closure1_slot11;
            oscar = report.CREATE_EVENTS;
            tango = new Array(2);
            tango[0] = oscar;
            report = report.MANAGE_EVENTS;
            tango[1] = report;
            zulu = tango;
 67:
            foxtrot = _closure1_slot3;
            offset = undefined;
            report = 2;
            zulu = foxtrot.bind(offset)(zulu, report);
            golf = 0;
            tango = zulu[golf];
            var _closure2_slot1 = tango;
            oscar = 1;
            zulu = zulu[oscar];
            var _closure2_slot2 = zulu;
            tango = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 8;
            options = yankee[zulu];
            kilo = tango.bind(offset)(options);
            backup = kilo.useStateFromStoresArray;
            options = _closure1_slot6;
            romeo = new Array(1);
            romeo[0] = options;
            options = function() {
                report = _closure1_slot6;
                oscar = report.can;
                zulu = _closure1_slot11;
                entity = zulu.CREATE_GUILD_EXPRESSIONS;
                tango = _closure2_slot0;
                oscar = oscar.bind(report)(entity, tango);
                entity = new Array(4);
                entity[0] = oscar;
                oscar = report.can;
                zulu = zulu.MANAGE_GUILD_EXPRESSIONS;
                zulu = oscar.bind(report)(zulu, tango);
                entity[1] = zulu;
                oscar = report.can;
                zulu = _closure2_slot1;
                zulu = oscar.bind(report)(zulu, tango);
                entity[2] = zulu;
                zulu = report.can;
                mike = _closure2_slot2;
                mike = zulu.bind(report)(mike, tango);
                entity[3] = mike;
                return entity;
            };
            romeo = backup.bind(kilo)(romeo, options);
            options = 4;
            romeo = foxtrot.bind(offset)(romeo, options);
            options = romeo[golf];
            var _closure2_slot3 = options;
            oscar = romeo[oscar];
            var _closure2_slot4 = oscar;
            golf = romeo[report];
            var _closure2_slot5 = golf;
            report = 3;
            report = romeo[report];
            var _closure2_slot6 = report;
            zulu = yankee[zulu];
            yankee = tango.bind(offset)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot7;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                mike = _closure1_slot7;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            romeo = offset.bind(yankee)(tango, zulu);
            var _closure2_slot7 = romeo;
            yankee = _closure1_slot4;
            offset = yankee.useCallback;
            tango = new Array(3);
            tango[0] = options;
            tango[1] = oscar;
            tango[2] = romeo;
            zulu = function(argFoo) {
                oscar = _closure1_slot13;
                verify = _closure2_slot7;
                options = _closure2_slot4;
                golf = _closure2_slot3;
                yankee = undefined;
                offset = argFoo;
                entity = yankee[oscar](offset, verify, options, golf, oscar);
                return entity;
            };
            tango = offset.bind(yankee)(zulu, tango);
            offset = yankee.useCallback;
            zulu = new Array(3);
            zulu[0] = report;
            zulu[1] = golf;
            zulu[2] = romeo;
            entity = function(argFoo) {
                oscar = _closure1_slot13;
                verify = _closure2_slot7;
                options = _closure2_slot6;
                golf = _closure2_slot5;
                yankee = undefined;
                offset = argFoo;
                entity = yankee[oscar](offset, verify, options, golf, oscar);
                return entity;
            };
            zulu = offset.bind(yankee)(entity, zulu);
            entity = null;
            if(!(entity != verify)) { _fun76126_ip = 353; continue _fun76126 }
 319:
            entity = {};
            entity['canCreateExpressions'] = options;
            entity['canCreateGuildEvent'] = golf;
            entity['canManageAllExpressions'] = oscar;
            entity['canManageAllEvents'] = report;
            entity['canManageGuildExpression'] = tango;
            entity['canManageGuildEvent'] = zulu;
            _fun76126_ip = 357; continue _fun76126;
 353:
            entity = _closure1_slot12;
 357:
            return entity;
        }
    };
    zulu['useManageResourcePermissions'] = tango;
    mike = function(argFoo) {
        _fun76131: for(var _fun76131_ip = 0; ; ) switch(_fun76131_ip) {
 0:
            options = argFoo;
            offset = arguments[1];
            verify = arguments[2];
            oscar = undefined;
            if(!(offset === oscar)) { _fun76131_ip = 24; continue _fun76131 }
 17:
            offset = _closure1_slot6;
 24:
            if(!(verify === oscar)) { _fun76131_ip = 35; continue _fun76131 }
 28:
            verify = _closure1_slot7;
 35:
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = oscar;
            var _closure2_slot2 = oscar;
            var _closure2_slot3 = oscar;
            var _closure2_slot4 = oscar;
            entity = _closure1_slot5;
            entity = options instanceof entity;
            if(entity) { _fun76131_ip = 80; continue _fun76131 }
 69:
            entity = _closure1_slot14;
            report = entity.bind(oscar)(options);
            _fun76131_ip = 111; continue _fun76131;
 80:
            tango = _closure1_slot11;
            golf = tango.CREATE_EVENTS;
            entity = new Array(2);
            entity[0] = golf;
            tango = tango.MANAGE_EVENTS;
            entity[1] = tango;
            report = entity;
 111:
            tango = _closure1_slot3;
            entity = 2;
            tango = tango.bind(oscar)(report, entity);
            entity = 0;
            oscar = tango[entity];
            entity = 1;
            tango = tango[entity];
            golf = offset.can;
            entity = _closure1_slot11;
            report = entity.CREATE_GUILD_EXPRESSIONS;
            golf = golf.bind(offset)(report, options);
            _closure2_slot0 = golf;
            report = offset.can;
            entity = entity.MANAGE_GUILD_EXPRESSIONS;
            report = report.bind(offset)(entity, options);
            _closure2_slot1 = report;
            entity = offset.can;
            oscar = entity.bind(offset)(oscar, options);
            _closure2_slot2 = oscar;
            entity = offset.can;
            tango = entity.bind(offset)(tango, options);
            _closure2_slot3 = tango;
            entity = verify.getCurrentUser;
            entity = entity.bind(verify)();
            _closure2_slot4 = entity;
            entity = null;
            if(!(entity != options)) { _fun76131_ip = 284; continue _fun76131 }
 236:
            entity = {};
            entity['canCreateExpressions'] = golf;
            entity['canCreateGuildEvent'] = oscar;
            entity['canManageAllExpressions'] = report;
            entity['canManageAllEvents'] = tango;
            tango = function(argFoo) { // Original name: canManageGuildExpression
                oscar = _closure1_slot13;
                verify = _closure2_slot4;
                options = _closure2_slot1;
                golf = _closure2_slot0;
                yankee = undefined;
                offset = argFoo;
                entity = yankee[oscar](offset, verify, options, golf, oscar);
                return entity;
            };
            entity['canManageGuildExpression'] = tango;
            zulu = function(argFoo) { // Original name: canManageGuildEvent
                oscar = _closure1_slot13;
                verify = _closure2_slot4;
                options = _closure2_slot3;
                golf = _closure2_slot2;
                yankee = undefined;
                offset = argFoo;
                entity = yankee[oscar](offset, verify, options, golf, oscar);
                return entity;
            };
            entity['canManageGuildEvent'] = zulu;
            _fun76131_ip = 288; continue _fun76131;
 284:
            entity = _closure1_slot12;
 288:
            return entity;
        }
    };
    zulu['getManageResourcePermissions'] = mike;
    return entity;
})();