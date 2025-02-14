// app/modules/forwarding/formatMessageForwards.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: createGuildBreadcrumb
        golf = argFoo;
        oscar = argBar;
        entity = {};
        mike = golf.name;
        entity['originLabel'] = mike;
        tango = _closure1_slot1;
        verify = _closure1_slot2;
        zulu = 8;
        zulu = verify[zulu];
        options = undefined;
        report = tango.bind(options)(zulu);
        tango = report.getGuildIconURL;
        zulu = {};
        offset = golf.id;
        zulu['id'] = offset;
        offset = 16;
        zulu['size'] = offset;
        offset = golf.icon;
        zulu['icon'] = offset;
        offset = false;
        zulu['canAnimate'] = offset;
        zulu = tango.bind(report)(zulu);
        entity['originIconUrl'] = zulu;
        entity['timestampLabel'] = oscar;
        zulu = _closure1_slot0;
        mike = 9;
        tango = verify[mike];
        tango = zulu.bind(options)(tango);
        report = tango.intl;
        tango = report.formatToPlainString;
        mike = verify[mike];
        mike = zulu.bind(options)(mike);
        mike = mike.t;
        zulu = mike.+l04BA;
        mike = {};
        golf = golf.name;
        mike['origin'] = golf;
        mike['timestamp'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        entity['accessibilityLabel'] = mike;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
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
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar, argBaz) { // Original name: MessageForward
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = argFoo;
            zulu['parentMessage'] = mike;
            mike = argBar;
            zulu['messageSnapshot'] = mike;
            mike = argBaz;
            zulu['snapshotIndex'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        report = 'getForwardInfo';
        entity['key'] = report;
        mike = function() { // Original name: value
            _fun72195: for(var _fun72195_ip = 0; ; ) switch(_fun72195_ip) {
 0:
                romeo = arguments[0];
                kilo = arguments[1];
                backup = arguments[2];
                yankee = arguments[3];
                verify = arguments[4];
                output = arguments[5];
                entity = this;
                golf = undefined;
                if(!(romeo === golf)) { _fun72195_ip = 34; continue _fun72195 }
 27:
                romeo = _closure1_slot6;
 34:
                if(!(kilo === golf)) { _fun72195_ip = 45; continue _fun72195 }
 38:
                kilo = _closure1_slot10;
 45:
                if(!(backup === golf)) { _fun72195_ip = 56; continue _fun72195 }
 49:
                backup = _closure1_slot9;
 56:
                if(!(yankee === golf)) { _fun72195_ip = 67; continue _fun72195 }
 60:
                yankee = _closure1_slot8;
 67:
                if(!(verify === golf)) { _fun72195_ip = 78; continue _fun72195 }
 71:
                verify = _closure1_slot7;
 78:
                if(!(output === golf)) { _fun72195_ip = 89; continue _fun72195 }
 82:
                output = _closure1_slot5;
 89:
                tango = entity.snapshotIndex;
                options = entity.parentMessage;
                report = entity.messageSnapshot;
                offset = _closure1_slot0;
                foxtrot = _closure1_slot2;
                zulu = 10;
                zulu = foxtrot[zulu];
                result = offset.bind(golf)(zulu);
                sizing = result.getMessageForwardingExperimentConfig;
                oscar = {};
                zulu = 'GetForwardInfo';
                oscar['location'] = zulu;
                zulu = {};
                echo = false;
                zulu['autoTrackExposure'] = echo;
                zulu = sizing.bind(result)(oscar, zulu);
                zulu = zulu.useOldIcon;
                oscar = 11;
                oscar = foxtrot[oscar];
                oscar = offset.bind(golf)(oscar);
                foxtrot = oscar.MessageForwardBreadcrumbExperiment;
                offset = foxtrot.getCurrentConfig;
                oscar = {};
                sizing = 'MessageForward';
                oscar['location'] = sizing;
                oscar = offset.bind(foxtrot)(oscar);
                oscar = oscar.showForwardBreadcrumb;
                if(oscar) { _fun72195_ip = 233; continue _fun72195 }
 219:
                oscar = {};
                oscar['snapshotIndex'] = tango;
                oscar['useOldIcon'] = zulu;
                return oscar;
 233:
                offset = _closure1_slot0;
                foxtrot = _closure1_slot2;
                oscar = 12;
                oscar = foxtrot[oscar];
                offset = offset.bind(golf)(oscar);
                oscar = offset.calendarFormatCompact;
                report = report.message;
                report = report.timestamp;
                oscar = oscar.bind(offset)(report);
                report = romeo.getChannel;
                entity = entity.parentMessage;
                entity = entity.channel_id;
                report = report.bind(romeo)(entity);
                entity = null;
                if(!(entity != report)) { _fun72195_ip = 331; continue _fun72195 }
 302:
                foxtrot = report.guild_id;
                sizing = options.messageReference;
                result = entity == sizing;
                offset = undefined;
                if(result) { _fun72195_ip = 327; continue _fun72195 }
 322:
                offset = sizing.guild_id;
 327:
                if(!(foxtrot !== offset)) { _fun72195_ip = 443; continue _fun72195 }
 331:
                offset = options.messageReference;
                sizing = entity == offset;
                foxtrot = undefined;
                if(sizing) { _fun72195_ip = 351; continue _fun72195 }
 346:
                foxtrot = offset.guild_id;
 351:
                if(!(entity != foxtrot)) { _fun72195_ip = 429; continue _fun72195 }
 355:
                offset = verify.getGuild;
                sizing = offset.bind(verify)(foxtrot);
                if(!(entity == sizing)) { _fun72195_ip = 379; continue _fun72195 }
 369:
                offset = output.getGuild;
                sizing = offset.bind(output)(foxtrot);
 379:
                if(!(entity != sizing)) { _fun72195_ip = 412; continue _fun72195 }
 383:
                offset = {};
                offset['snapshotIndex'] = tango;
                foxtrot = _closure1_slot12;
                foxtrot = foxtrot.bind(golf)(sizing, oscar);
                offset['footerInfo'] = foxtrot;
                offset['useOldIcon'] = zulu;
                _fun72195_ip = 427; continue _fun72195;
 412:
                foxtrot = {};
                foxtrot['snapshotIndex'] = tango;
                foxtrot['useOldIcon'] = zulu;
                offset = foxtrot;
 427:
                return offset;
 429:
                offset = {};
                offset['snapshotIndex'] = tango;
                offset['useOldIcon'] = zulu;
                return offset;
 443:
                offset = romeo.getChannel;
                foxtrot = options.messageReference;
                sizing = entity == foxtrot;
                options = undefined;
                if(sizing) { _fun72195_ip = 468; continue _fun72195 }
 463:
                options = foxtrot.channel_id;
 468:
                foxtrot = offset.bind(romeo)(options);
                if(!(entity != foxtrot)) { _fun72195_ip = 654; continue _fun72195 }
 480:
                offset = yankee.can;
                options = foxtrot.accessPermissions;
                options = offset.bind(yankee)(options, foxtrot);
                if(options) { _fun72195_ip = 515; continue _fun72195 }
 501:
                options = {};
                options['snapshotIndex'] = tango;
                options['useOldIcon'] = zulu;
                return options;
 515:
                romeo = _closure1_slot0;
                sizing = _closure1_slot2;
                options = 13;
                options = sizing[options];
                yankee = romeo.bind(golf)(options);
                offset = yankee.computeChannelName;
                update = true;
                sequence = yankee;
                vacuum = foxtrot;
                control = kilo;
                source = backup;
                kilo = sequence[offset](vacuum, control, source, update, echo);
                options = {};
                options['snapshotIndex'] = tango;
                offset = {};
                offset['originLabel'] = kilo;
                offset['timestampLabel'] = oscar;
                yankee = 9;
                foxtrot = sizing[yankee];
                foxtrot = romeo.bind(golf)(foxtrot);
                backup = foxtrot.intl;
                foxtrot = backup.formatToPlainString;
                yankee = sizing[yankee];
                yankee = romeo.bind(golf)(yankee);
                yankee = yankee.t;
                romeo = yankee.+l04BA;
                yankee = {};
                yankee['origin'] = kilo;
                yankee['timestamp'] = oscar;
                yankee = foxtrot.bind(backup)(romeo, yankee);
                offset['accessibilityLabel'] = yankee;
                options['footerInfo'] = offset;
                options['useOldIcon'] = zulu;
                return options;
 654:
                options = verify.getGuild;
                report = report.guild_id;
                report = options.bind(verify)(report);
                if(!(entity != report)) { _fun72195_ip = 702; continue _fun72195 }
 673:
                entity = {};
                entity['snapshotIndex'] = tango;
                mike = _closure1_slot12;
                mike = mike.bind(golf)(report, oscar);
                entity['footerInfo'] = mike;
                entity['useOldIcon'] = zulu;
                _fun72195_ip = 717; continue _fun72195;
 702:
                mike = {};
                mike['snapshotIndex'] = tango;
                mike['useOldIcon'] = zulu;
                entity = mike;
 717:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot11 = tango;
    report = 15;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/forwarding/formatMessageForwards.tsx';
    report = oscar.bind(golf)(report);
    zulu['MessageForward'] = tango;
    mike = function(argFoo) { // Original name: maybeCreateSingleForwardForMessage
        _fun72196: for(var _fun72196_ip = 0; ; ) switch(_fun72196_ip) {
 0:
            report = argFoo;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 14;
            zulu = zulu[mike];
            mike = undefined;
            zulu = tango.bind(mike)(zulu);
            zulu = zulu.bind(mike)(report);
            if(!zulu) { _fun72196_ip = 54; continue _fun72196 }
 36:
            zulu = report.messageSnapshots;
            tango = 0;
            zulu = zulu[tango];
            oscar = null;
            if(!(oscar == zulu)) { _fun72196_ip = 56; continue _fun72196 }
 54:
            return mike;
 56:
            entity = _closure1_slot11;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            offset = mike;
            verify = report;
            options = zulu;
            golf = 0;
            entity = new offset[entity](verify, options, golf, oscar);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['maybeCreateSingleForwardForMessage'] = mike;
    return entity;
})();