// app/modules/forwarding/canForwardMessage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: _canForwardMessage
        _fun72651: for(var _fun72651_ip = 0; ; ) switch(_fun72651_ip) {
 0:
            options = argFoo;
            mike = options.state;
            entity = _closure1_slot7;
            entity = entity.SEND_FAILED;
            entity = mike !== entity;
            if(!entity) { _fun72651_ip = 182; continue _fun72651 }
 31:
            mike = _closure1_slot8;
            tango = mike.FORWARDABLE;
            zulu = tango.has;
            mike = options.type;
            mike = zulu.bind(tango)(mike);
            zulu = !mike;
            mike = !zulu;
            if(zulu) { _fun72651_ip = 179; continue _fun72651 }
 65:
            zulu = options.poll;
            verify = null;
            zulu = verify == zulu;
            if(!zulu) { _fun72651_ip = 176; continue _fun72651 }
 80:
            tango = options.activity;
            tango = verify == tango;
            if(!tango) { _fun72651_ip = 173; continue _fun72651 }
 93:
            report = options.call;
            report = verify == report;
            if(!report) { _fun72651_ip = 170; continue _fun72651 }
 105:
            oscar = options.activityInstance;
            oscar = verify == oscar;
            if(!oscar) { _fun72651_ip = 167; continue _fun72651 }
 118:
            yankee = _closure1_slot0;
            offset = _closure1_slot1;
            verify = 5;
            offset = offset[verify];
            verify = undefined;
            offset = yankee.bind(verify)(offset);
            verify = offset.removeFlag;
            options = options.flags;
            golf = _closure1_slot9;
            options = verify.bind(offset)(options, golf);
            golf = 0;
            oscar = golf === options;
 167:
            report = oscar;
 170:
            tango = report;
 173:
            zulu = tango;
 176:
            mike = zulu;
 179:
            entity = mike;
 182:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.GuildFeatures;
    var _closure1_slot6 = tango;
    tango = golf.MessageFlags;
    options = golf.MessageStates;
    var _closure1_slot7 = options;
    golf = golf.MessageTypesSets;
    var _closure1_slot8 = golf;
    options = tango.CROSSPOSTED;
    golf = tango.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD;
    options = options | golf;
    golf = tango.GUILD_FEED_HIDDEN;
    options = options | golf;
    golf = tango.HAS_SNAPSHOT;
    options = options | golf;
    golf = tango.HAS_THREAD;
    options = options | golf;
    golf = tango.IS_CROSSPOST;
    options = options | golf;
    golf = tango.IS_VOICE_MESSAGE;
    options = options | golf;
    golf = tango.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING;
    options = options | golf;
    golf = tango.SUPPRESS_EMBEDS;
    options = options | golf;
    golf = tango.SUPPRESS_NOTIFICATIONS;
    options = options | golf;
    golf = tango.URGENT;
    golf = options | golf;
    tango = tango.IS_COMPONENTS_V2;
    tango = golf | tango;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forwarding/canForwardMessage.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: canForwardMessage
        _fun72652: for(var _fun72652_ip = 0; ; ) switch(_fun72652_ip) {
 0:
            mike = argFoo;
            entity = _closure1_slot10;
            report = undefined;
            entity = entity.bind(report)(mike);
            if(entity) { _fun72652_ip = 24; continue _fun72652 }
 20:
            entity = false;
            return entity;
 24:
            oscar = _closure1_slot4;
            tango = oscar.getChannel;
            entity = mike.channel_id;
            tango = tango.bind(oscar)(entity);
            entity = null;
            oscar = entity == tango;
            report = undefined;
            if(oscar) { _fun72652_ip = 59; continue _fun72652 }
 54:
            report = tango.guild_id;
 59:
            entity = entity == report;
            if(entity) { _fun72652_ip = 90; continue _fun72652 }
 66:
            tango = _closure1_slot3;
            zulu = tango.isChannelOrThreadParentGated;
            mike = mike.channel_id;
            mike = zulu.bind(tango)(report, mike);
            entity = !mike;
 90:
            return entity;
        }
    };
    zulu['canForwardMessage'] = tango;
    mike = function(argFoo) { // Original name: useCanForwardMessage
        report = argFoo;
        var _closure2_slot0 = report;
        oscar = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 6;
        tango = tango[zulu];
        zulu = undefined;
        golf = oscar.bind(zulu)(tango);
        oscar = golf.useStateFromStores;
        zulu = _closure1_slot5;
        tango = new Array(3);
        tango[0] = zulu;
        zulu = _closure1_slot3;
        tango[1] = zulu;
        zulu = _closure1_slot4;
        tango[2] = zulu;
        zulu = function() {
            _fun72654: for(var _fun72654_ip = 0; ; ) switch(_fun72654_ip) {
 0:
                entity = _closure2_slot0;
                mike = null;
                if(!(mike != entity)) { _fun72654_ip = 153; continue _fun72654 }
 16:
                oscar = _closure1_slot4;
                report = oscar.getChannel;
                entity = _closure2_slot0;
                entity = entity.channel_id;
                report = report.bind(oscar)(entity);
                golf = mike == report;
                oscar = undefined;
                if(golf) { _fun72654_ip = 56; continue _fun72654 }
 51:
                oscar = report.guild_id;
 56:
                report = mike == oscar;
                if(report) { _fun72654_ip = 110; continue _fun72654 }
 63:
                options = _closure1_slot5;
                golf = options.getGuild;
                verify = golf.bind(options)(oscar);
                golf = mike == verify;
                entity = undefined;
                if(golf) { _fun72654_ip = 107; continue _fun72654 }
 86:
                options = verify.hasFeature;
                golf = _closure1_slot6;
                golf = golf.FORWARDING_DISABLED;
                entity = options.bind(verify)(golf);
 107:
                report = !entity;
 110:
                entity = !report;
                if(!report) { _fun72654_ip = 151; continue _fun72654 }
 116:
                mike = mike != oscar;
                if(!mike) { _fun72654_ip = 148; continue _fun72654 }
 123:
                report = _closure1_slot3;
                tango = report.isChannelOrThreadParentGated;
                zulu = _closure2_slot0;
                zulu = zulu.channel_id;
                mike = tango.bind(report)(oscar, zulu);
 148:
                entity = mike;
 151:
                return entity;
 153:
                entity = true;
                return entity;
            }
        };
        oscar = oscar.bind(golf)(tango, zulu);
        var _closure2_slot1 = oscar;
        tango = _closure1_slot2;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun72655: for(var _fun72655_ip = 0; ; ) switch(_fun72655_ip) {
 0:
                entity = _closure2_slot1;
                entity = !entity;
                if(!entity) { _fun72655_ip = 23; continue _fun72655 }
 13:
                tango = _closure2_slot0;
                zulu = null;
                entity = zulu != tango;
 23:
                if(!entity) { _fun72655_ip = 44; continue _fun72655 }
 26:
                tango = _closure1_slot10;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = tango.bind(mike)(zulu);
 44:
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['useCanForwardMessage'] = mike;
    return entity;
})();