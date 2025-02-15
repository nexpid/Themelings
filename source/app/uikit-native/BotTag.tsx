// app/uikit-native/BotTag.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = golf;
    mike = function() { // Original name: getBotLabel
        _fun73956: for(var _fun73956_ip = 0; ; ) switch(_fun73956_ip) {
 0:
            zulu = arguments[0];
            oscar = undefined;
            if(!(zulu === oscar)) { _fun73956_ip = 22; continue _fun73956 }
 9:
            entity = _closure1_slot4;
            zulu = entity.BOT;
 22:
            entity = _closure1_slot4;
            entity = entity.SYSTEM_DM;
            if(!(entity !== zulu)) { _fun73956_ip = 274; continue _fun73956 }
 42:
            entity = _closure1_slot4;
            entity = entity.OFFICIAL;
            if(!(entity !== zulu)) { _fun73956_ip = 274; continue _fun73956 }
 59:
            entity = _closure1_slot4;
            entity = entity.SERVER;
            if(!(entity !== zulu)) { _fun73956_ip = 217; continue _fun73956 }
 76:
            entity = _closure1_slot4;
            entity = entity.AI;
            if(!(entity !== zulu)) { _fun73956_ip = 160; continue _fun73956 }
 90:
            entity = _closure1_slot4;
            entity = entity.BOT;
            report = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 7;
            zulu = golf[entity];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            entity = golf[entity];
            entity = report.bind(oscar)(entity);
            entity = entity.t;
            entity = entity.9RNkeH;
            entity = zulu.bind(tango)(entity);
            _fun73956_ip = 329; continue _fun73956;
 160:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 7;
            tango = options[zulu];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.pLTJZG;
            entity = tango.bind(report)(zulu);
            _fun73956_ip = 329; continue _fun73956;
 217:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 7;
            tango = options[zulu];
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.PuJGuL;
            entity = tango.bind(report)(zulu);
            _fun73956_ip = 329; continue _fun73956;
 274:
            report = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.lKQ7Wl;
            entity = zulu.bind(tango)(mike);
 329:
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    kilo = 1;
    report = golf[kilo];
    report = oscar.bind(entity)(report);
    report = report.View;
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    backup = report.Fonts;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.BotTagTypes;
    var _closure1_slot4 = report;
    options = 4;
    verify = golf[options];
    verify = oscar.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot5 = verify;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot6 = options;
    options = 5;
    options = golf[options];
    offset = oscar.bind(entity)(options);
    verify = offset.createStyles;
    options = {};
    yankee = {'height': 16, 'paddingLeft': 4, 'paddingRight': 4, 'borderRadius': null, 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'gap': 1};
    romeo = 6;
    sizing = golf[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.radii;
    sizing = sizing.xs;
    yankee['borderRadius'] = sizing;
    options['tag'] = yankee;
    yankee = {};
    yankee['paddingLeft'] = kilo;
    options['verifiedTagLeftPadding'] = yankee;
    yankee = {};
    kilo = golf[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BG_BRAND;
    yankee['backgroundColor'] = kilo;
    options['tagNormal'] = yankee;
    yankee = {};
    kilo = golf[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.WHITE;
    yankee['backgroundColor'] = kilo;
    options['tagInverted'] = yankee;
    yankee = {};
    kilo = golf[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.TEXT_POSITIVE;
    yankee['backgroundColor'] = kilo;
    options['tagAI'] = yankee;
    yankee = {};
    kilo = 12;
    yankee['fontSize'] = kilo;
    backup = backup.PRIMARY_SEMIBOLD;
    yankee['fontFamily'] = backup;
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.WHITE;
    yankee['color'] = backup;
    options['tagText'] = yankee;
    yankee = {};
    backup = golf[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.WHITE;
    yankee['color'] = backup;
    options['tagTextNormal'] = yankee;
    yankee = {};
    romeo = golf[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BRAND;
    yankee['color'] = romeo;
    options['tagTextInverted'] = yankee;
    options = verify.bind(offset)(options);
    var _closure1_slot7 = options;
    tango = function(argFoo) { // Original name: BotTag
        _fun73957: for(var _fun73957_ip = 0; ; ) switch(_fun73957_ip) {
 0:
            mike = argFoo;
            entity = mike.invertColor;
            tango = undefined;
            if(!(entity === tango)) { _fun73957_ip = 19; continue _fun73957 }
 17:
            entity = false;
 19:
            zulu = mike.type;
            if(!(zulu === tango)) { _fun73957_ip = 41; continue _fun73957 }
 28:
            report = _closure1_slot4;
            zulu = report.BOT;
 41:
            romeo = mike.style;
            mike = mike.verified;
            report = _closure1_slot7;
            offset = report.bind(tango)();
            report = _closure1_slot8;
            verify = report.bind(tango)(zulu);
            report = _closure1_slot4;
            report = report.OFFICIAL;
            report = zulu === report;
            if(report) { _fun73957_ip = 103; continue _fun73957 }
 89:
            golf = _closure1_slot4;
            golf = golf.SYSTEM_DM;
            report = zulu === golf;
 103:
            if(report) { _fun73957_ip = 120; continue _fun73957 }
 106:
            golf = _closure1_slot4;
            golf = golf.AI;
            report = zulu === golf;
 120:
            if(mike) { _fun73957_ip = 126; continue _fun73957 }
 123:
            mike = report;
 126:
            options = null;
            golf = null;
            if(!mike) { _fun73957_ip = 210; continue _fun73957 }
 133:
            yankee = _closure1_slot5;
            report = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 8;
            mike = kilo[mike];
            mike = report.bind(tango)(mike);
            report = mike.CheckmarkSmallBoldIcon;
            mike = {};
            foxtrot = 'xs';
            mike['size'] = foxtrot;
            backup = _closure1_slot1;
            foxtrot = 6;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.colors;
            foxtrot = foxtrot.WHITE;
            mike['color'] = foxtrot;
            golf = yankee.bind(tango)(report, mike);
 210:
            mike = _closure1_slot4;
            mike = mike.AI;
            if(!(zulu !== mike)) { _fun73957_ip = 243; continue _fun73957 }
 224:
            if(entity) { _fun73957_ip = 235; continue _fun73957 }
 227:
            foxtrot = offset.tagNormal;
            _fun73957_ip = 241; continue _fun73957;
 235:
            foxtrot = offset.tagInverted;
 241:
            _fun73957_ip = 249; continue _fun73957;
 243:
            foxtrot = offset.tagAI;
 249:
            if(entity) { _fun73957_ip = 260; continue _fun73957 }
 252:
            yankee = offset.tagTextNormal;
            _fun73957_ip = 266; continue _fun73957;
 260:
            yankee = offset.tagTextInverted;
 266:
            entity = options != golf;
            options = null;
            if(!entity) { _fun73957_ip = 281; continue _fun73957 }
 275:
            options = offset.verifiedTagLeftPadding;
 281:
            zulu = _closure1_slot6;
            mike = _closure1_slot3;
            entity = {};
            backup = offset.tag;
            report = new Array(4);
            report[0] = backup;
            report[1] = foxtrot;
            report[2] = romeo;
            report[3] = options;
            entity['style'] = report;
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot5;
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            oscar = 9;
            oscar = romeo[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.LegacyText;
            oscar = {};
            romeo = 2;
            oscar['maxFontSizeMultiplier'] = romeo;
            romeo = offset.tagText;
            offset = new Array(2);
            offset[0] = romeo;
            offset[1] = yankee;
            oscar['style'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango['Types'] = report;
    report = 10;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'uikit-native/BotTag.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['getBotLabel'] = mike;
    return entity;
})();