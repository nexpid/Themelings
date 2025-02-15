// app/uikit-native/guild_sidebar/BaseChannelItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    verify = argBar;
    backup = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = offset;
    oscar = function(argFoo) { // Original name: BaseChannelSubtitle
        _fun113542: for(var _fun113542_ip = 0; ; ) switch(_fun113542_ip) {
 0:
            entity = argFoo;
            zulu = entity.mode;
            golf = entity.subtitle;
            entity = _closure1_slot12;
            report = undefined;
            oscar = entity.bind(report)(zulu);
            entity = null;
            zulu = entity == golf;
            if(zulu) { _fun113542_ip = 105; continue _fun113542 }
 37:
            tango = _closure1_slot6;
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            mike = 6;
            mike = options[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.Text;
            mike = {'experimental_useNativeText': true, 'lineClamp': 1};
            offset = mike;
            verify = oscar;
            oscar = copyDataProperties(offset, verify);
            oscar = 'children';
            mike[oscar] = golf;
            entity = tango.bind(report)(zulu, mike);
 105:
            return entity;
        }
    };
    var _closure1_slot10 = oscar;
    report = function(argFoo) { // Original name: useChannelNameTextProps
        _fun113543: for(var _fun113543_ip = 0; ; ) switch(_fun113543_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot9;
            zulu = zulu.UNREAD_IMPORTANT;
            if(!(mike !== zulu)) { _fun113543_ip = 132; continue _fun113543 }
 20:
            zulu = _closure1_slot9;
            zulu = zulu.RELEVANT;
            if(!(mike !== zulu)) { _fun113543_ip = 132; continue _fun113543 }
 34:
            zulu = _closure1_slot9;
            zulu = zulu.UNREAD_LESS_IMPORTANT;
            if(!(mike !== zulu)) { _fun113543_ip = 120; continue _fun113543 }
 48:
            zulu = _closure1_slot9;
            zulu = zulu.MUTED;
            if(!(mike !== zulu)) { _fun113543_ip = 104; continue _fun113543 }
 62:
            entity = _closure1_slot9;
            entity = entity.SELECTED;
            if(!(mike !== entity)) { _fun113543_ip = 88; continue _fun113543 }
 76:
            entity = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-muted-text'};
            _fun113543_ip = 102; continue _fun113543;
 88:
            entity = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-text'};
 102:
            _fun113543_ip = 118; continue _fun113543;
 104:
            entity = {'variant': 'text-md/medium', 'color': 'interactive-muted'};
 118:
            _fun113543_ip = 130; continue _fun113543;
 120:
            entity = {'variant': 'text-md/medium', 'color': 'redesign-channel-name-muted-text'};
 130:
            _fun113543_ip = 146; continue _fun113543;
 132:
            entity = {'variant': 'text-md/semibold', 'color': 'redesign-channel-name-text'};
 146:
            return entity;
        }
    };
    var _closure1_slot11 = report;
    tango = function(argFoo) { // Original name: getChannelSubtitleTextProps
        _fun113544: for(var _fun113544_ip = 0; ; ) switch(_fun113544_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot9;
            zulu = zulu.UNREAD_IMPORTANT;
            if(!(mike !== zulu)) { _fun113544_ip = 94; continue _fun113544 }
 20:
            zulu = _closure1_slot9;
            zulu = zulu.RELEVANT;
            if(!(mike !== zulu)) { _fun113544_ip = 94; continue _fun113544 }
 34:
            zulu = _closure1_slot9;
            zulu = zulu.SELECTED;
            if(!(mike !== zulu)) { _fun113544_ip = 94; continue _fun113544 }
 48:
            entity = _closure1_slot9;
            entity = entity.MUTED;
            if(!(mike !== entity)) { _fun113544_ip = 78; continue _fun113544 }
 62:
            entity = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            _fun113544_ip = 92; continue _fun113544;
 78:
            entity = {'variant': 'text-xs/medium', 'color': 'interactive-muted'};
 92:
            _fun113544_ip = 108; continue _fun113544;
 94:
            entity = {'variant': 'text-xs/medium', 'color': 'redesign-channel-name-text'};
 108:
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    entity = global;
    yankee = entity.Object;
    options = yankee.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(yankee)(zulu, entity, golf);
    entity = 0;
    options = offset[entity];
    golf = argCorge;
    entity = undefined;
    golf = golf.bind(entity)(options);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    golf = golf.View;
    var _closure1_slot4 = golf;
    golf = 2;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    golf = golf.UnreadSetting;
    var _closure1_slot5 = golf;
    golf = 3;
    options = offset[golf];
    options = verify.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot6 = options;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot7 = golf;
    golf = 4;
    golf = offset[golf];
    yankee = verify.bind(entity)(golf);
    options = yankee.createStyles;
    golf = {};
    romeo = {};
    foxtrot = 6;
    romeo['paddingHorizontal'] = foxtrot;
    golf['rowPaddingNoIcon'] = romeo;
    romeo = {};
    foxtrot = 5;
    kilo = offset[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.md;
    romeo['borderRadius'] = kilo;
    kilo = offset[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BG_MOD_FAINT;
    romeo['backgroundColor'] = kilo;
    golf['rowSelected'] = romeo;
    romeo = {};
    kilo = offset[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.md;
    romeo['borderRadius'] = kilo;
    golf['rowSelectedThemed'] = romeo;
    romeo = {'position': 'absolute', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0, 'borderWidth': 1};
    kilo = offset[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BORDER_FAINT;
    romeo['borderColor'] = kilo;
    kilo = offset[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.md;
    romeo['borderRadius'] = kilo;
    golf['selectedBorder'] = romeo;
    romeo = {};
    kilo = offset[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    kilo = -kilo;
    romeo['left'] = kilo;
    golf['unreadIndicator'] = romeo;
    kilo = 8;
    romeo = {'width': 16, 'height': 16, 'marginRight': 8};
    golf['channelIcon'] = romeo;
    romeo = {};
    romeo['marginRight'] = kilo;
    golf['redesignedChannelIcon'] = romeo;
    romeo = {};
    kilo = offset[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.CHANNEL_ICON;
    romeo['tintColor'] = kilo;
    golf['channelIconNormal'] = romeo;
    romeo = {};
    kilo = offset[foxtrot];
    kilo = backup.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.INTERACTIVE_ACTIVE;
    romeo['tintColor'] = kilo;
    golf['channelIconUnread'] = romeo;
    romeo = {};
    foxtrot = offset[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.INTERACTIVE_MUTED;
    romeo['tintColor'] = foxtrot;
    golf['channelIconMuted'] = romeo;
    romeo = {'paddingHorizontal': 8, 'paddingVertical': 8, 'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative'};
    golf['channel'] = romeo;
    romeo = {'flex': 1, 'flexDirection': 'column', 'alignItems': 'stretch', 'justifyContent': 'center'};
    golf['channelNameContainer'] = romeo;
    romeo = {'flexGrow': 1, 'textAlign': 'left'};
    golf['channelName'] = romeo;
    golf = options.bind(yankee)(golf);
    var _closure1_slot8 = golf;
    golf = {};
    options = 'Selected';
    golf['SELECTED'] = options;
    options = 'Locked';
    golf['LOCKED'] = options;
    options = 'Muted';
    golf['MUTED'] = options;
    options = 'Relevant';
    golf['RELEVANT'] = options;
    options = 'UnreadLessImportant';
    golf['UNREAD_LESS_IMPORTANT'] = options;
    options = 'UnreadImportant';
    golf['UNREAD_IMPORTANT'] = options;
    options = 'Default';
    golf['DEFAULT'] = options;
    var _closure1_slot9 = golf;
    options = 11;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'uikit-native/guild_sidebar/BaseChannelItem.tsx';
    options = verify.bind(offset)(options);
    options = function(argFoo) { // Original name: BaseChannelItem
        _fun113545: for(var _fun113545_ip = 0; ; ) switch(_fun113545_ip) {
 0:
            golf = argFoo;
            foxtrot = golf.icon;
            yankee = golf.name;
            echo = golf.mode;
            var _closure2_slot0 = echo;
            romeo = golf.hideIcon;
            var _closure2_slot1 = romeo;
            mike = golf.disableHighlightOnPress;
            tango = undefined;
            if(!(mike === tango)) { _fun113545_ip = 48; continue _fun113545 }
 46:
            mike = false;
 48:
            offset = golf.channelInfo;
            report = golf.children;
            result = golf.unread;
            if(!(result === tango)) { _fun113545_ip = 71; continue _fun113545 }
 69:
            result = false;
 71:
            oscar = {'icon': 0, 'name': 0, 'mode': 0, 'hideIcon': 0, 'disableHighlightOnPress': 0, 'channelInfo': 0, 'children': 0, 'unread': 0};
            vacuum = null;
            sequence = oscar;
            entity = silentSetPrototypeOf(sequence, vacuum);
            sequence = {};
            vacuum = golf;
            control = oscar;
            oscar = copyDataProperties(sequence, vacuum, control);
            var _closure2_slot2 = tango;
            golf = _closure1_slot8;
            update = golf.bind(tango)();
            _closure2_slot2 = update;
            verify = _closure1_slot3;
            options = verify.useMemo;
            golf = new Array(3);
            golf[0] = romeo;
            golf[1] = echo;
            golf[2] = update;
            zulu = function() {
                _fun113546: for(var _fun113546_ip = 0; ; ) switch(_fun113546_ip) {
 0:
                    entity = _closure2_slot2;
                    mike = entity.channel;
                    entity = new Array(3);
                    entity[0] = mike;
                    mike = _closure2_slot1;
                    if(!mike) { _fun113546_ip = 37; continue _fun113546 }
 27:
                    tango = _closure2_slot2;
                    mike = tango.rowPaddingNoIcon;
 37:
                    entity[1] = mike;
                    tango = _closure2_slot0;
                    mike = _closure1_slot9;
                    mike = mike.SELECTED;
                    mike = tango === mike;
                    if(!mike) { _fun113546_ip = 75; continue _fun113546 }
 65:
                    zulu = _closure2_slot2;
                    mike = zulu.rowSelected;
 75:
                    entity[2] = mike;
                    return entity;
                }
            };
            verify = options.bind(verify)(zulu, golf);
            options = _closure1_slot7;
            golf = _closure1_slot4;
            zulu = {};
            zulu['style'] = verify;
            verify = _closure1_slot9;
            verify = verify.SELECTED;
            backup = echo === verify;
            if(!backup) { _fun113545_ip = 220; continue _fun113545 }
 194:
            sizing = _closure1_slot6;
            kilo = _closure1_slot4;
            verify = {};
            output = update.selectedBorder;
            verify['style'] = output;
            backup = sizing.bind(tango)(kilo, verify);
 220:
            verify = new Array(5);
            verify[0] = backup;
            backup = !romeo;
            if(!backup) { _fun113545_ip = 322; continue _fun113545 }
 234:
            output = _closure1_slot6;
            sizing = _closure1_slot1;
            source = _closure1_slot2;
            kilo = 8;
            kilo = source[kilo];
            sizing = sizing.bind(tango)(kilo);
            kilo = {};
            update = update.unreadIndicator;
            kilo['style'] = update;
            kilo['unread'] = result;
            result = _closure1_slot9;
            result = result.UNREAD_LESS_IMPORTANT;
            if(!(echo !== result)) { _fun113545_ip = 301; continue _fun113545 }
 289:
            result = _closure1_slot5;
            result = result.ALL_MESSAGES;
            _fun113545_ip = 311; continue _fun113545;
 301:
            echo = _closure1_slot5;
            result = echo.ONLY_MENTIONS;
 311:
            kilo['resolvedUnreadSetting'] = result;
            backup = output.bind(tango)(sizing, kilo);
 322:
            verify[1] = backup;
            romeo = !romeo;
            if(!romeo) { _fun113545_ip = 335; continue _fun113545 }
 332:
            romeo = foxtrot;
 335:
            verify[2] = romeo;
            verify[3] = yankee;
            verify[4] = offset;
            zulu['children'] = verify;
            golf = options.bind(tango)(golf, zulu);
            zulu = _closure1_slot7;
            if(mike) { _fun113545_ip = 392; continue _fun113545 }
 364:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 9;
            mike = verify[mike];
            mike = options.bind(tango)(mike);
            mike = mike.AnimatedPressableHighlight;
            _fun113545_ip = 412; continue _fun113545;
 392:
            options = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            mike = options.bind(tango)(entity);
 412:
            entity = {};
            sequence = entity;
            vacuum = oscar;
            oscar = copyDataProperties(sequence, vacuum);
            oscar = new Array(2);
            oscar[0] = golf;
            oscar[1] = report;
            report = 'children';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = options;
    zulu['ChannelModes'] = golf;
    zulu['BaseChannelSubtitle'] = oscar;
    oscar = function(argFoo) { // Original name: BaseChannelIcon
        _fun113547: for(var _fun113547_ip = 0; ; ) switch(_fun113547_ip) {
 0:
            entity = argFoo;
            output = entity.disableColor;
            zulu = entity.mode;
            romeo = entity.source;
            report = entity.IconComponent;
            yankee = entity.style;
            golf = entity.isChannelLive;
            entity = _closure1_slot8;
            tango = undefined;
            oscar = entity.bind(tango)();
            entity = _closure1_slot9;
            entity = entity.MUTED;
            offset = zulu === entity;
            entity = _closure1_slot9;
            entity = entity.UNREAD_IMPORTANT;
            options = zulu === entity;
            entity = _closure1_slot9;
            entity = entity.SELECTED;
            verify = zulu === entity;
            entity = oscar.channelIcon;
            foxtrot = new Array(1);
            foxtrot[0] = entity;
            entity = true;
            if(!(entity !== output)) { _fun113547_ip = 152; continue _fun113547 }
 111:
            zulu = foxtrot.push;
            if(offset) { _fun113547_ip = 141; continue _fun113547 }
 119:
            if(options) { _fun113547_ip = 133; continue _fun113547 }
 122:
            if(verify) { _fun113547_ip = 133; continue _fun113547 }
 125:
            entity = oscar.channelIconNormal;
            _fun113547_ip = 139; continue _fun113547;
 133:
            entity = oscar.channelIconUnread;
 139:
            _fun113547_ip = 147; continue _fun113547;
 141:
            entity = oscar.channelIconMuted;
 147:
            entity = zulu.bind(foxtrot)(entity);
 152:
            entity = null;
            if(!(entity != yankee)) { _fun113547_ip = 168; continue _fun113547 }
 158:
            zulu = foxtrot.push;
            zulu = zulu.bind(foxtrot)(yankee);
 168:
            if(!(entity == report)) { _fun113547_ip = 244; continue _fun113547 }
 172:
            yankee = _closure1_slot6;
            kilo = _closure1_slot1;
            sizing = _closure1_slot2;
            backup = 7;
            entity = sizing[backup];
            zulu = kilo.bind(tango)(entity);
            entity = {};
            entity['disableColor'] = output;
            backup = sizing[backup];
            backup = kilo.bind(tango)(backup);
            backup = backup.Sizes;
            backup = backup.CUSTOM;
            entity['size'] = backup;
            entity['style'] = foxtrot;
            entity['source'] = romeo;
            entity = yankee.bind(tango)(zulu, entity);
            _fun113547_ip = 320; continue _fun113547;
 244:
            zulu = _closure1_slot6;
            mike = {};
            yankee = 'sm';
            mike['size'] = yankee;
            oscar = oscar.redesignedChannelIcon;
            mike['style'] = oscar;
            oscar = 'status-positive';
            if(golf) { _fun113547_ip = 310; continue _fun113547 }
 277:
            golf = 'interactive-muted';
            if(offset) { _fun113547_ip = 307; continue _fun113547 }
 286:
            if(options) { _fun113547_ip = 298; continue _fun113547 }
 289:
            options = 'channel-icon';
            if(!verify) { _fun113547_ip = 304; continue _fun113547 }
 298:
            options = 'interactive-active';
 304:
            golf = options;
 307:
            oscar = golf;
 310:
            mike['color'] = oscar;
            entity = zulu.bind(tango)(report, mike);
 320:
            return entity;
        }
    };
    zulu['BaseChannelIcon'] = oscar;
    zulu['useChannelNameTextProps'] = report;
    zulu['getChannelSubtitleTextProps'] = tango;
    mike = function(argFoo) { // Original name: BaseChannelName
        entity = argFoo;
        offset = entity.mode;
        romeo = entity.name;
        verify = entity.subtitle;
        yankee = entity.textStyle;
        entity = _closure1_slot8;
        tango = undefined;
        foxtrot = entity.bind(tango)();
        zulu = _closure1_slot7;
        mike = _closure1_slot4;
        entity = {};
        report = foxtrot.channelNameContainer;
        entity['style'] = report;
        options = _closure1_slot6;
        golf = _closure1_slot0;
        backup = _closure1_slot2;
        report = 6;
        report = backup[report];
        report = golf.bind(tango)(report);
        golf = report.Text;
        report = {};
        backup = true;
        report['experimental_useNativeText'] = backup;
        backup = _closure1_slot11;
        sizing = backup.bind(tango)(offset);
        output = report;
        backup = copyDataProperties(output, sizing);
        kilo = 1;
        backup = 'lineClamp';
        report[backup] = kilo;
        backup = foxtrot.channelName;
        foxtrot = new Array(2);
        foxtrot[0] = backup;
        foxtrot[1] = yankee;
        yankee = 'style';
        report[yankee] = foxtrot;
        yankee = 'children';
        report[yankee] = romeo;
        golf = options.bind(tango)(golf, report);
        report = new Array(2);
        report[0] = golf;
        options = _closure1_slot6;
        golf = _closure1_slot10;
        oscar = {};
        oscar['mode'] = offset;
        oscar['subtitle'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['BaseChannelName'] = mike;
    return entity;
})();