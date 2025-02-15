// app/modules/launchpad/native/shared/ChannelTitle.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.UnreadSetting;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
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
    var _closure1_slot6 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: ChannelTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = entity.title;
            yankee = entity.muted;
            var _closure2_slot0 = yankee;
            backup = entity.unread;
            var _closure2_slot1 = backup;
            offset = entity.resolvedUnreadSetting;
            var _closure2_slot2 = offset;
            romeo = entity.connected;
            var _closure2_slot3 = romeo;
            report = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 5;
            zulu = options[zulu];
            tango = undefined;
            zulu = report.bind(tango)(zulu);
            golf = zulu.bind(tango)();
            zulu = _closure1_slot6;
            foxtrot = zulu.bind(tango)();
            var _closure2_slot4 = foxtrot;
            verify = _closure1_slot3;
            report = verify.useMemo;
            zulu = new Array(5);
            zulu[0] = backup;
            zulu[1] = foxtrot;
            zulu[2] = romeo;
            zulu[3] = yankee;
            zulu[4] = offset;
            mike = function() {
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
                    tango = _closure1_slot4;
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
            report = report.bind(verify)(mike, zulu);
            zulu = _closure1_slot5;
            mike = _closure1_slot0;
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
            if(!golf) { _fun00002_ip = 218; continue _fun00001 }
 215:
            report = oscar;
 218:
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
    tango = 'modules/launchpad/native/shared/ChannelTitle.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();