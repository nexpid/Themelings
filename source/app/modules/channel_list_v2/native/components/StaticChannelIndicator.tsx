// app/modules/channel_list_v2/native/components/StaticChannelIndicator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    romeo = 0;
    tango = oscar[romeo];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot3 = golf;
    offset = tango.StyleSheet;
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
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    backup = offset.absoluteFillObject;
    kilo = verify;
    offset = copyDataProperties(kilo, backup);
    offset = 'top';
    verify[offset] = romeo;
    offset = 'bottom';
    verify[offset] = romeo;
    romeo = 'center';
    offset = 'justifyContent';
    verify[offset] = romeo;
    tango['indicatorContainer'] = verify;
    verify = {'width': 8, 'height': 8, 'borderRadius': null, 'marginLeft': 4294967292};
    offset = 4;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.round;
    verify['borderRadius'] = offset;
    tango['indicator'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/components/StaticChannelIndicator.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ChannelIndicator
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zulu = entity.unread;
            verify = entity.resolvedUnreadSetting;
            options = entity.style;
            entity = _closure1_slot6;
            report = undefined;
            golf = entity.bind(report)();
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 5;
            entity = oscar[entity];
            oscar = tango.bind(report)(entity);
            tango = oscar.useToken;
            entity = _closure1_slot4;
            entity = entity.ALL_MESSAGES;
            if(!(verify !== entity)) { _fun00002_ip = 106; continue _fun00001 }
 73:
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 4;
            entity = offset[entity];
            entity = verify.bind(report)(entity);
            entity = entity.colors;
            entity = entity.CHANNELS_DEFAULT;
            _fun00002_ip = 137; continue _fun00001;
 106:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            verify = 4;
            verify = yankee[verify];
            verify = offset.bind(report)(verify);
            verify = verify.colors;
            entity = verify.INTERACTIVE_ACTIVE;
 137:
            offset = tango.bind(oscar)(entity);
            entity = null;
            if(!zulu) { _fun00002_ip = 217; continue _fun00001 }
 147:
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            oscar = golf.indicatorContainer;
            mike['style'] = oscar;
            oscar = {};
            verify = golf.indicator;
            golf = new Array(3);
            golf[0] = verify;
            verify = {};
            verify['backgroundColor'] = offset;
            golf[1] = verify;
            golf[2] = options;
            oscar['style'] = golf;
            oscar = tango.bind(report)(zulu, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 217:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();