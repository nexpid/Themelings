// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyleProperties;
    tango = {};
    offset = 4;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.INTERACTIVE_MUTED;
    tango['muted'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.REDESIGN_CHANNEL_NAME_MUTED_TEXT;
    tango['normal'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.REDESIGN_CHANNEL_NAME_TEXT;
    tango['unreadOrConnected'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot5 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: ChannelTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = entity.title;
            romeo = entity.muted;
            var _closure2_slot0 = romeo;
            kilo = entity.unread;
            var _closure2_slot1 = kilo;
            yankee = entity.resolvedUnreadSetting;
            var _closure2_slot2 = yankee;
            foxtrot = entity.connected;
            var _closure2_slot3 = foxtrot;
            verify = entity.layout;
            mike = _closure1_slot0;
            options = _closure1_slot1;
            tango = 5;
            report = options[tango];
            tango = undefined;
            golf = mike.bind(tango)(report);
            report = golf.getLayoutStyles;
            golf = report.bind(golf)(verify);
            report = _closure1_slot5;
            backup = report.bind(tango)();
            var _closure2_slot4 = backup;
            offset = _closure1_slot2;
            verify = offset.useMemo;
            report = new Array(5);
            report[0] = kilo;
            report[1] = backup;
            report[2] = foxtrot;
            report[3] = romeo;
            report[4] = yankee;
            zulu = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot4;
                    mike = mike.normal;
                    zulu = _closure2_slot0;
                    if(zulu) { _fun00004_ip = 70; continue _fun00003 }
 20:
                    zulu = _closure2_slot1;
                    if(!zulu) { _fun00004_ip = 48; continue _fun00003 }
 27:
                    report = _closure2_slot2;
                    tango = _closure1_slot3;
                    tango = tango.ALL_MESSAGES;
                    zulu = report === tango;
 48:
                    if(zulu) { _fun00004_ip = 55; continue _fun00003 }
 51:
                    zulu = _closure2_slot3;
 55:
                    if(!zulu) { _fun00004_ip = 80; continue _fun00003 }
 58:
                    zulu = _closure2_slot4;
                    mike = zulu.unreadOrConnected;
                    _fun00004_ip = 80; continue _fun00003;
 70:
                    entity = _closure2_slot4;
                    mike = entity.muted;
 80:
                    entity = {'color': null, 'paddingRight': 4, 'flexShrink': 1};
                    entity['color'] = mike;
                    return entity;
                }
            };
            report = verify.bind(offset)(zulu, report);
            zulu = _closure1_slot4;
            entity = 6;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.Text;
            entity = {'variant': null, 'lineClamp': 1, 'maxFontSizeMultiplier': 1.75};
            golf = golf.channelName;
            golf = golf.text;
            golf = golf.variant;
            entity['variant'] = golf;
            entity['style'] = report;
            report = null;
            golf = report != oscar;
            report = '';
            if(!golf) { _fun00002_ip = 227; continue _fun00001 }
 224:
            report = oscar;
 227:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelTitle.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();