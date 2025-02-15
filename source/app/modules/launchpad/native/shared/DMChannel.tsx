// app/modules/launchpad/native/shared/DMChannel.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    romeo = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: usePrivateChannelPressEvents
        zulu = argFoo;
        report = argBar;
        var _closure2_slot0 = zulu;
        var _closure2_slot1 = report;
        entity = {};
        options = _closure1_slot3;
        golf = options.useCallback;
        verify = zulu.id;
        oscar = new Array(2);
        oscar[0] = verify;
        oscar[1] = report;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.transitionToChannel;
            mike = _closure2_slot0;
            zulu = mike.id;
            mike = {};
            oscar = _closure2_slot1;
            mike['navigationReplace'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        report = golf.bind(options)(report, oscar);
        entity['onPress'] = report;
        report = _closure1_slot3;
        tango = report.useCallback;
        oscar = zulu.id;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.openChannelLongPressActionSheet;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        entity['onLongPress'] = mike;
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    yankee = 1;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    offset['flex'] = yankee;
    tango['pressable'] = offset;
    offset = {};
    yankee = 6;
    yankee = oscar[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACTIVE;
    offset['backgroundColor'] = yankee;
    tango['pressableUnderlayColor'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot6 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: DMChannel
        _fun121098: for(var _fun121098_ip = 0; ; ) switch(_fun121098_ip) {
 0:
            entity = argFoo;
            offset = entity.channel;
            sizing = entity.muted;
            zulu = undefined;
            if(!(sizing === zulu)) { _fun121098_ip = 22; continue _fun121098 }
 20:
            sizing = false;
 22:
            golf = entity.navigationReplace;
            if(!(golf === zulu)) { _fun121098_ip = 34; continue _fun121098 }
 32:
            golf = false;
 34:
            entity = _closure1_slot6;
            oscar = entity.bind(zulu)();
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 7;
            entity = tango[entity];
            entity = mike.bind(zulu)(entity);
            control = entity.bind(zulu)();
            report = _closure1_slot0;
            entity = 8;
            entity = tango[entity];
            report = report.bind(zulu)(entity);
            entity = report.useBaseChannelUnreadBadgeState;
            entity = entity.bind(report)(offset, sizing);
            echo = entity.unread;
            foxtrot = entity.mentionCount;
            entity = 9;
            entity = tango[entity];
            entity = mike.bind(zulu)(entity);
            result = entity.bind(zulu)(offset, echo);
            romeo = null;
            entity = romeo != result;
            yankee = undefined;
            if(!entity) { _fun121098_ip = 174; continue _fun121098 }
 138:
            mike = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 10;
            entity = tango[entity];
            tango = mike.bind(zulu)(entity);
            mike = tango.extractTimestamp;
            entity = result.id;
            yankee = mike.bind(tango)(entity);
 174:
            entity = 'text-muted';
            output = entity;
            if(!echo) { _fun121098_ip = 198; continue _fun121098 }
 186:
            output = entity;
            if(sizing) { _fun121098_ip = 198; continue _fun121098 }
 192:
            output = 'text-normal';
 198:
            tango = _closure1_slot0;
            update = _closure1_slot2;
            entity = 11;
            entity = update[entity];
            mike = tango.bind(zulu)(entity);
            entity = mike.useFontScale;
            options = entity.bind(mike)();
            backup = _closure1_slot1;
            entity = 12;
            entity = update[entity];
            mike = backup.bind(zulu)(entity);
            report = _closure1_slot5;
            entity = 13;
            entity = update[entity];
            entity = tango.bind(zulu)(entity);
            tango = entity.PressableHighlight;
            entity = {};
            source = oscar.pressable;
            kilo = new Array(2);
            kilo[0] = source;
            source = {};
            control = control.container;
            control = control.borderRadius;
            source['borderRadius'] = control;
            kilo[1] = source;
            entity['style'] = kilo;
            oscar = oscar.pressableUnderlayColor;
            oscar = oscar.backgroundColor;
            entity['underlayColor'] = oscar;
            oscar = _closure1_slot7;
            vacuum = oscar.bind(zulu)(offset, golf);
            sequence = entity;
            oscar = copyDataProperties(sequence, vacuum);
            oscar = 14;
            oscar = update[oscar];
            golf = backup.bind(zulu)(oscar);
            oscar = {};
            oscar['channel'] = offset;
            oscar['unread'] = echo;
            kilo = _closure1_slot4;
            source = kilo.ALL_MESSAGES;
            oscar['resolvedUnreadSetting'] = source;
            oscar['muted'] = sizing;
            oscar['mentionCount'] = foxtrot;
            foxtrot = 15;
            foxtrot = update[foxtrot];
            backup = backup.bind(zulu)(foxtrot);
            foxtrot = {};
            foxtrot['unread'] = echo;
            kilo = kilo.ALL_MESSAGES;
            foxtrot['resolvedUnreadSetting'] = kilo;
            foxtrot['muted'] = sizing;
            foxtrot = report.bind(zulu)(backup, foxtrot);
            oscar['unreadBadge'] = foxtrot;
            romeo = romeo != result;
            if(!romeo) { _fun121098_ip = 495; continue _fun121098 }
 440:
            kilo = _closure1_slot5;
            backup = _closure1_slot0;
            echo = _closure1_slot2;
            foxtrot = 16;
            foxtrot = echo[foxtrot];
            foxtrot = backup.bind(zulu)(foxtrot);
            backup = foxtrot.PrivateChannelRowPreview;
            foxtrot = {};
            foxtrot['channel'] = offset;
            foxtrot['message'] = result;
            foxtrot['color'] = output;
            foxtrot['muted'] = sizing;
            romeo = kilo.bind(zulu)(backup, foxtrot);
 495:
            oscar['subtitle'] = romeo;
            oscar['latestMessageTimestamp'] = yankee;
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            verify = 17;
            verify = romeo[verify];
            verify = yankee.bind(zulu)(verify);
            verify = verify.bind(zulu)(offset);
            oscar['channelName'] = verify;
            oscar['fontScale'] = options;
            golf = golf.bind(zulu)(oscar);
            oscar = 'children';
            entity[oscar] = golf;
            entity = report.bind(zulu)(tango, entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/shared/DMChannel.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();