// app/modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: canEveryoneRoleViewEvent
        _fun69851: for(var _fun69851_ip = 0; ; ) switch(_fun69851_ip) {
 0:
            zulu = argFoo;
            tango = arguments[1];
            oscar = undefined;
            if(!(tango === oscar)) { _fun69851_ip = 30; continue _fun69851 }
 12:
            mike = _closure1_slot4;
            entity = new Array(1);
            entity[0] = mike;
            tango = entity;
 30:
            mike = tango;
            entity = mike[Symbol.iterator];
            mike = entity().next;
            report = mike().value;
            mike = entity;
            mike = mike === oscar;
            tango = undefined;
            if(mike) { _fun69851_ip = 55; continue _fun69851 }
 52:
            tango = report;
 55:
            if(mike) { _fun69851_ip = 61; continue _fun69851 }
 58:
            entity.return();
 61:
            entity = 'entity_type';
            mike = entity in zulu;
            entity = zulu;
            if(!mike) { _fun69851_ip = 100; continue _fun69851 }
 75:
            mike = {};
            report = zulu.entity_type;
            mike['entityType'] = report;
            zulu = zulu.channel_id;
            mike['channelId'] = zulu;
            entity = mike;
 100:
            report = entity.entityType;
            zulu = entity.channelId;
            entity = _closure1_slot9;
            entity = entity.EXTERNAL;
            if(!(report !== entity)) { _fun69851_ip = 191; continue _fun69851 }
 128:
            entity = tango.getChannel;
            report = entity.bind(tango)(zulu);
            entity = null;
            entity = entity != report;
            if(!entity) { _fun69851_ip = 189; continue _fun69851 }
 147:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 8;
            zulu = golf[zulu];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.canEveryoneRole;
            mike = _closure1_slot10;
            mike = mike.VIEW_CHANNEL;
            entity = zulu.bind(tango)(mike, report);
 189:
            return entity;
 191:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    mike = function(argFoo) { // Original name: isGuildEventInvitable
        _fun69852: for(var _fun69852_ip = 0; ; ) switch(_fun69852_ip) {
 0:
            oscar = argFoo;
            mike = arguments[1];
            report = undefined;
            if(!(mike === report)) { _fun69852_ip = 54; continue _fun69852 }
 12:
            tango = _closure1_slot5;
            entity = new Array(4);
            entity[0] = tango;
            tango = _closure1_slot4;
            entity[1] = tango;
            tango = _closure1_slot6;
            entity[2] = tango;
            zulu = _closure1_slot3;
            entity[3] = zulu;
            mike = entity;
 54:
            zulu = mike;
            entity = zulu[Symbol.iterator];
            zulu = entity().next;
            tango = zulu().value;
            mike = entity;
            mike = mike === report;
            romeo = undefined;
            if(mike) { _fun69852_ip = 79; continue _fun69852 }
 76:
            romeo = tango;
 79:
            golf = undefined;
            if(mike) { _fun69852_ip = 109; continue _fun69852 }
 84:
            options = zulu().value;
            tango = entity;
            tango = tango === report;
            golf = undefined;
            mike = tango;
            if(tango) { _fun69852_ip = 109; continue _fun69852 }
 103:
            golf = options;
            mike = tango;
 109:
            offset = undefined;
            if(mike) { _fun69852_ip = 139; continue _fun69852 }
 114:
            options = zulu().value;
            tango = entity;
            tango = tango === report;
            offset = undefined;
            mike = tango;
            if(tango) { _fun69852_ip = 139; continue _fun69852 }
 133:
            offset = options;
            mike = tango;
 139:
            options = undefined;
            if(mike) { _fun69852_ip = 169; continue _fun69852 }
 144:
            tango = zulu().value;
            zulu = entity;
            zulu = zulu === report;
            options = undefined;
            mike = zulu;
            if(zulu) { _fun69852_ip = 169; continue _fun69852 }
 163:
            options = tango;
            mike = zulu;
 169:
            if(mike) { _fun69852_ip = 175; continue _fun69852 }
 172:
            entity.return();
 175:
            entity = _closure1_slot8;
            entity = entity.bind(report)(oscar);
            if(entity) { _fun69852_ip = 353; continue _fun69852 }
 193:
            verify = oscar.guild_id;
            mike = oscar.channel_id;
            tango = oscar.entity_type;
            entity = _closure1_slot9;
            entity = entity.EXTERNAL;
            if(!(tango !== entity)) { _fun69852_ip = 235; continue _fun69852 }
 223:
            entity = golf.getChannel;
            tango = entity.bind(golf)(mike);
            _fun69852_ip = 251; continue _fun69852;
 235:
            yankee = romeo.getDefaultChannel;
            entity = oscar.guild_id;
            tango = yankee.bind(romeo)(entity);
 251:
            entity = offset.getGuild;
            kilo = entity.bind(offset)(verify);
            entity = options.getStageInstanceByChannel;
            foxtrot = entity.bind(options)(mike);
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 9;
            entity = options[entity];
            options = mike.bind(report)(entity);
            mike = options.canViewInviteModal;
            sizing = _closure1_slot7;
            output = options;
            backup = tango;
            entity = output[mike](sizing, kilo, backup, foxtrot, romeo);
            mike = !entity;
            entity = !mike;
            if(mike) { _fun69852_ip = 351; continue _fun69852 }
 321:
            mike = null;
            mike = mike != tango;
            if(!mike) { _fun69852_ip = 348; continue _fun69852 }
 330:
            tango = _closure1_slot11;
            zulu = new Array(1);
            zulu[0] = golf;
            mike = tango.bind(report)(oscar, zulu);
 348:
            entity = mike;
 351:
            return entity;
 353:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.isGuildEventEnded;
    var _closure1_slot8 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.GuildScheduledEventEntityTypes;
    var _closure1_slot9 = oscar;
    oscar = 7;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.Permissions;
    var _closure1_slot10 = oscar;
    oscar = 11;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_scheduled_events/useCanInviteForGuildEvent.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo) { // Original name: useCanInviteForGuildEvent
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 10;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        golf = _closure1_slot5;
        zulu = new Array(4);
        zulu[0] = golf;
        golf = _closure1_slot4;
        zulu[1] = golf;
        golf = _closure1_slot6;
        zulu[2] = golf;
        mike = _closure1_slot3;
        zulu[3] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            tango = _closure1_slot12;
            zulu = _closure2_slot0;
            report = _closure1_slot5;
            mike = new Array(4);
            mike[0] = report;
            report = _closure1_slot4;
            mike[1] = report;
            report = _closure1_slot6;
            mike[2] = report;
            entity = _closure1_slot3;
            mike[3] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = report;
    zulu['canEveryoneRoleViewEvent'] = tango;
    zulu['isGuildEventInvitable'] = mike;
    return entity;
})();