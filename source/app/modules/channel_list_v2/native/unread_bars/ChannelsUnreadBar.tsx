// app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.Pressable;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.getScaledSearchBarHeight;
    var _closure1_slot5 = offset;
    tango = tango.VIEWABILITY_CONFIG;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot7 = tango;
    tango = 5;
    offset = oscar[tango];
    offset = report.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot8 = offset;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    options = options.bind(entity)(tango);
    tango = options.createAnimatedComponent;
    tango = tango.bind(options)(verify);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            entity = {};
            mike = {'position': 'absolute', 'right': '50%', 'zIndex': 1, 'marginVertical': 12, 'marginHorizontal': 0, 'paddingRight': 9, 'paddingLeft': null, 'paddingVertical': 4, 'minHeight': 24, 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': null, 'backgroundColor': null, 'elevation': 4};
            offset = 1;
            golf = 9;
            report = 5;
            if(!tango) { _fun00002_ip = 34; continue _fun00001 }
 31:
            report = 6;
 34:
            mike['paddingLeft'] = report;
            yankee = 4;
            romeo = _closure1_slot1;
            oscar = _closure1_slot2;
            options = 8;
            verify = oscar[options];
            oscar = undefined;
            verify = romeo.bind(oscar)(verify);
            verify = verify.radii;
            verify = verify.round;
            mike['borderRadius'] = verify;
            romeo = _closure1_slot1;
            verify = _closure1_slot2;
            verify = verify[options];
            verify = romeo.bind(oscar)(verify);
            if(tango) { _fun00002_ip = 131; continue _fun00001 }
 104:
            romeo = verify.colors;
            tango = argBar;
            if(tango) { _fun00002_ip = 123; continue _fun00001 }
 115:
            tango = romeo.BG_SURFACE_OVERLAY;
            _fun00002_ip = 129; continue _fun00001;
 123:
            tango = romeo.ACTION_SHEET_GRADIENT_BG;
 129:
            _fun00002_ip = 142; continue _fun00001;
 131:
            verify = verify.unsafe_rawColors;
            tango = verify.RED_400;
 142:
            mike['backgroundColor'] = tango;
            verify = _closure1_slot1;
            tango = _closure1_slot2;
            romeo = tango[options];
            romeo = verify.bind(oscar)(romeo);
            romeo = romeo.colors;
            romeo = romeo.BLACK;
            mike['shadowColor'] = romeo;
            romeo = {'width': 0, 'height': 1};
            mike['shadowOffset'] = romeo;
            romeo = 0.08;
            mike['shadowOpacity'] = romeo;
            mike['shadowRadius'] = yankee;
            mike['borderWidth'] = offset;
            options = tango[options];
            options = verify.bind(oscar)(options);
            options = options.colors;
            options = options.BORDER_SUBTLE;
            mike['borderColor'] = options;
            entity['unreadBar'] = mike;
            mike = {'textTransform': 'uppercase', 'marginTop': null, 'marginLeft': 2, 'marginRight': 0};
            report = _closure1_slot0;
            tango = tango[golf];
            report = report.bind(oscar)(tango);
            tango = report.isAndroid;
            tango = tango.bind(report)();
            zulu = 0;
            if(!tango) { _fun00002_ip = 298; continue _fun00001 }
 292:
            zulu = -1;
 298:
            mike['marginTop'] = zulu;
            entity['text'] = mike;
            return entity;
        }
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot11 = tango;
    tango = {};
    options = "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}";
    tango['code'] = options;
    var _closure1_slot12 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: ChannelsUnreadBar
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            mike = tango.position;
            var _closure2_slot0 = mike;
            kilo = tango.shown;
            var _closure2_slot1 = kilo;
            golf = tango.onPress;
            var _closure2_slot2 = golf;
            report = tango.isMention;
            var _closure2_slot3 = report;
            vacuum = tango.guildChannelsListUnreadBarInsetEnd;
            var _closure2_slot4 = vacuum;
            target = tango.scrollPosition;
            var _closure2_slot5 = target;
            papa = tango.listPaddingTop;
            var _closure2_slot6 = papa;
            zulu = tango.endReachedCounter;
            var _closure2_slot7 = zulu;
            oscar = tango.headerHeight;
            var _closure2_slot8 = oscar;
            tango = undefined;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            var _closure2_slot13 = tango;
            var _closure2_slot14 = tango;
            var _closure2_slot15 = tango;
            var _closure2_slot16 = tango;
            var _closure2_slot17 = tango;
            yankee = _closure1_slot4;
            offset = yankee.useState;
            options = null;
            options = options != report;
            if(!options) { _fun00004_ip = 155; continue _fun00003 }
 152:
            options = report;
 155:
            options = offset.bind(yankee)(options);
            sierra = _closure1_slot3;
            status = 2;
            options = sierra.bind(tango)(options, status);
            record = 0;
            yankee = options[record];
            _closure2_slot9 = yankee;
            backup = 1;
            options = options[backup];
            _closure2_slot10 = options;
            config = _closure1_slot4;
            offset = config.useEffect;
            options = new Array(1);
            options[0] = report;
            report = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = null;
                    if(!(mike != zulu)) { _fun00006_ip = 28; continue _fun00005 }
 13:
                    zulu = _closure2_slot10;
                    mike = _closure2_slot3;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            report = offset.bind(config)(report, options);
            options = _closure1_slot1;
            update = _closure1_slot2;
            report = 10;
            report = update[report];
            report = options.bind(tango)(report);
            options = report.bind(tango)();
            report = _closure1_slot11;
            offset = report.bind(tango)(yankee, options);
            echo = _closure1_slot0;
            report = 11;
            report = update[report];
            options = echo.bind(tango)(report);
            report = options.useFontScale;
            context = report.bind(options)();
            romeo = 12;
            report = update[romeo];
            report = echo.bind(tango)(report);
            report = report.TextStyleSheet;
            report = report.text-xs/bold;
            report = report.lineHeight;
            report = report * context;
            result = 8;
            foxtrot = report + result;
            control = 6;
            report = update[control];
            options = echo.bind(tango)(report);
            report = options.useSharedValue;
            sizing = report.bind(options)(record);
            _closure2_slot11 = sizing;
            report = update[control];
            options = echo.bind(tango)(report);
            report = options.useSharedValue;
            sequence = report.bind(options)(foxtrot);
            _closure2_slot12 = sequence;
            foxtrot = config.useCallback;
            options = new Array(2);
            options[0] = sizing;
            options[1] = sequence;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = argFoo;
                    entity = mike.nativeEvent;
                    entity = entity.layout;
                    report = entity.width;
                    entity = 0;
                    if(!(entity !== report)) { _fun00008_ip = 42; continue _fun00007 }
 25:
                    tango = _closure2_slot11;
                    zulu = tango.set;
                    zulu = zulu.bind(tango)(report);
 42:
                    mike = mike.nativeEvent;
                    mike = mike.layout;
                    zulu = mike.height;
                    if(!(entity !== zulu)) { _fun00008_ip = 79; continue _fun00007 }
 62:
                    mike = _closure2_slot12;
                    entity = mike.set;
                    entity = entity.bind(mike)(zulu);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            report = foxtrot.bind(config)(report, options);
            output = config.useEffect;
            foxtrot = new Array(3);
            foxtrot[0] = kilo;
            foxtrot[1] = yankee;
            foxtrot[2] = mike;
            options = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00010_ip = 76; continue _fun00009 }
 10:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 13;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.trackWithMetadata;
                    entity = _closure1_slot7;
                    mike = entity.CHANNEL_LIST_UNREAD_BADGE_VIEWED;
                    entity = {};
                    oscar = _closure2_slot9;
                    entity['is_mention'] = oscar;
                    report = _closure2_slot0;
                    entity['position'] = report;
                    entity = zulu.bind(tango)(mike, entity);
 76:
                    entity = undefined;
                    return entity;
                }
            };
            options = output.bind(config)(options, foxtrot);
            foxtrot = config.useCallback;
            options = new Array(3);
            options[0] = golf;
            options[1] = mike;
            options[2] = yankee;
            golf = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 13;
                zulu = zulu[entity];
                entity = undefined;
                oscar = tango.bind(entity)(zulu);
                report = oscar.trackWithMetadata;
                mike = _closure1_slot7;
                tango = mike.CHANNEL_LIST_UNREAD_BADGE_CLICKED;
                zulu = {};
                golf = _closure2_slot9;
                zulu['is_mention'] = golf;
                golf = _closure2_slot0;
                zulu['position'] = golf;
                zulu = report.bind(oscar)(tango, zulu);
                mike = _closure2_slot2;
                mike = mike.bind(entity)();
                return entity;
            };
            foxtrot = foxtrot.bind(config)(golf, options);
            golf = update[control];
            options = echo.bind(tango)(golf);
            golf = options.useSharedValue;
            source = golf.bind(options)(record);
            _closure2_slot13 = source;
            output = config.useCallback;
            options = new Array(1);
            options[0] = source;
            golf = function() {
                zulu = _closure2_slot13;
                mike = zulu.set;
                entity = 1;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            options = output.bind(config)(golf, options);
            lima = config.useCallback;
            output = new Array(1);
            output[0] = source;
            golf = function() {
                zulu = _closure2_slot13;
                mike = zulu.set;
                entity = 0;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            golf = lima.bind(config)(golf, output);
            lima = config.useMemo;
            output = new Array(2);
            output[0] = oscar;
            output[1] = mike;
            oscar = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = 'bottom';
                    if(!(entity !== zulu)) { _fun00012_ip = 27; continue _fun00011 }
 15:
                    entity = {};
                    mike = _closure2_slot8;
                    entity['top'] = mike;
                    _fun00012_ip = 38; continue _fun00011;
 27:
                    mike = {};
                    zulu = 0;
                    mike['bottom'] = zulu;
                    entity = mike;
 38:
                    return entity;
                }
            };
            output = lima.bind(config)(oscar, output);
            oscar = _closure1_slot5;
            context = oscar.bind(tango)(context);
            _closure2_slot14 = context;
            lima = config.useState;
            oscar = false;
            oscar = lima.bind(config)(oscar);
            oscar = sierra.bind(tango)(oscar, status);
            record = oscar[record];
            _closure2_slot15 = record;
            oscar = oscar[backup];
            _closure2_slot16 = oscar;
            backup = config.useEffect;
            oscar = new Array(1);
            oscar[0] = zulu;
            zulu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot7;
                    mike = null;
                    if(!(mike != zulu)) { _fun00014_ip = 26; continue _fun00013 }
 13:
                    zulu = _closure2_slot16;
                    mike = undefined;
                    entity = true;
                    entity = zulu.bind(mike)(entity);
 26:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = backup.bind(config)(zulu, oscar);
            backup = config.useCallback;
            oscar = function() {
                entity = global;
                tango = entity.setTimeout;
                entity = _closure1_slot6;
                mike = entity.minimumViewTime;
                entity = 1;
                zulu = mike + entity;
                entity = undefined;
                mike = function() {
                    zulu = _closure2_slot16;
                    entity = undefined;
                    mike = false;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = tango.bind(entity)(mike, zulu);
                return entity;
            };
            zulu = new Array(0);
            config = backup.bind(config)(oscar, zulu);
            _closure2_slot17 = config;
            zulu = update[control];
            oscar = echo.bind(tango)(zulu);
            zulu = oscar.useAnimatedStyle;
            entity = function() { // Original name: X
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00016_ip = 90; continue _fun00015 }
 10:
                    zulu = _closure2_slot0;
                    mike = 'top';
                    if(!(mike !== zulu)) { _fun00016_ip = 31; continue _fun00015 }
 22:
                    mike = _closure2_slot15;
                    mike = !mike;
                    _fun00016_ip = 87; continue _fun00015;
 31:
                    zulu = _closure2_slot5;
                    report = null;
                    zulu = report != zulu;
                    if(!zulu) { _fun00016_ip = 52; continue _fun00015 }
 44:
                    tango = _closure2_slot6;
                    zulu = report != tango;
 52:
                    if(!zulu) { _fun00016_ip = 84; continue _fun00015 }
 55:
                    report = _closure2_slot5;
                    tango = report.get;
                    report = tango.bind(report)();
                    oscar = _closure2_slot6;
                    tango = _closure2_slot14;
                    tango = oscar + tango;
                    zulu = report > tango;
 84:
                    mike = zulu;
 87:
                    entity = mike;
 90:
                    mike = _closure2_slot15;
                    if(!mike) { _fun00016_ip = 140; continue _fun00015 }
 97:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 6;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.runOnJS;
                    mike = _closure2_slot17;
                    mike = tango.bind(report)(mike);
                    mike = mike.bind(zulu)();
 140:
                    zulu = _closure2_slot12;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    mike = 12;
                    tango = zulu - mike;
                    report = _closure2_slot0;
                    zulu = 'bottom';
                    if(entity) { _fun00016_ip = 190; continue _fun00015 }
 171:
                    mike = -1;
                    if(!(zulu === report)) { _fun00016_ip = 184; continue _fun00015 }
 181:
                    mike = 1;
 184:
                    foxtrot = tango * mike;
                    _fun00016_ip = 230; continue _fun00015;
 190:
                    mike = 0;
                    if(!(zulu === report)) { _fun00016_ip = 227; continue _fun00015 }
 196:
                    report = _closure2_slot4;
                    zulu = null;
                    zulu = zulu != report;
                    mike = 0;
                    if(!zulu) { _fun00016_ip = 227; continue _fun00015 }
 211:
                    tango = _closure2_slot4;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    mike = -zulu;
 227:
                    foxtrot = mike;
 230:
                    mike = 0;
                    backup = 0;
                    if(!entity) { _fun00016_ip = 240; continue _fun00015 }
 237:
                    backup = 1;
 240:
                    zulu = _closure2_slot11;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    entity = entity > mike;
                    report = 1;
                    if(!entity) { _fun00016_ip = 300; continue _fun00015 }
 263:
                    mike = _closure2_slot11;
                    entity = mike.get;
                    mike = entity.bind(mike)();
                    entity = 5;
                    mike = mike + entity;
                    zulu = _closure2_slot11;
                    entity = zulu.get;
                    entity = entity.bind(zulu)();
                    report = mike / entity;
 300:
                    entity = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscar = 14;
                    mike = offset[oscar];
                    options = undefined;
                    romeo = verify.bind(options)(mike);
                    golf = romeo.withSpring;
                    tango = 15;
                    mike = offset[tango];
                    mike = verify.bind(options)(mike);
                    zulu = mike.springStandard;
                    mike = 'animate-always';
                    mike = golf.bind(romeo)(backup, zulu, mike);
                    entity['opacity'] = mike;
                    zulu = {};
                    mike = offset[oscar];
                    romeo = verify.bind(options)(mike);
                    golf = romeo.withSpring;
                    mike = offset[tango];
                    mike = verify.bind(options)(mike);
                    mike = mike.springStandard;
                    mike = golf.bind(romeo)(foxtrot, mike);
                    zulu['translateY'] = mike;
                    mike = new Array(3);
                    mike[0] = zulu;
                    zulu = {};
                    romeo = _closure2_slot11;
                    golf = romeo.get;
                    romeo = golf.bind(romeo)();
                    golf = 2;
                    golf = romeo / golf;
                    zulu['translateX'] = golf;
                    mike[1] = zulu;
                    zulu = {};
                    oscar = offset[oscar];
                    golf = verify.bind(options)(oscar);
                    oscar = golf.withSpring;
                    romeo = 6;
                    romeo = offset[romeo];
                    backup = verify.bind(options)(romeo);
                    foxtrot = backup.interpolate;
                    romeo = _closure2_slot13;
                    yankee = romeo.get;
                    romeo = yankee.bind(romeo)();
                    yankee = [1];
                    yankee[1] = report;
                    report = [0, 1];
                    report = foxtrot.bind(backup)(romeo, report, yankee);
                    tango = offset[tango];
                    tango = verify.bind(options)(tango);
                    tango = tango.ON_PRESS_SPRING;
                    tango = oscar.bind(golf)(report, tango);
                    zulu['scale'] = tango;
                    mike[2] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            backup = {};
            backup['shown'] = kilo;
            backup['position'] = mike;
            backup['scrollPosition'] = target;
            backup['listPaddingTop'] = papa;
            backup['searchBarHeight'] = context;
            backup['justReachedEnd'] = record;
            record = update[control];
            record = echo.bind(tango)(record);
            record = record.runOnJS;
            backup['runOnJS'] = record;
            backup['resetReachedEnd'] = config;
            backup['height'] = sequence;
            backup['MARGIN'] = romeo;
            backup['guildChannelsListUnreadBarInsetEnd'] = vacuum;
            backup['width'] = sizing;
            sizing = 14;
            sizing = update[sizing];
            sizing = echo.bind(tango)(sizing);
            sizing = sizing.withSpring;
            backup['withSpring'] = sizing;
            sizing = 15;
            vacuum = update[sizing];
            vacuum = echo.bind(tango)(vacuum);
            vacuum = vacuum.springStandard;
            backup['springStandard'] = vacuum;
            control = update[control];
            control = echo.bind(tango)(control);
            control = control.interpolate;
            backup['interpolate'] = control;
            backup['pressed'] = source;
            sizing = update[sizing];
            sizing = echo.bind(tango)(sizing);
            sizing = sizing.ON_PRESS_SPRING;
            backup['ON_PRESS_SPRING'] = sizing;
            entity['__closure'] = backup;
            backup = 978162815161.0;
            entity['__workletHash'] = backup;
            backup = _closure1_slot12;
            entity['__initData'] = backup;
            sizing = zulu.bind(oscar)(entity);
            if(yankee) { _fun00004_ip = 971; continue _fun00003 }
 907:
            entity = 'bottom';
            if(!(entity !== mike)) { _fun00004_ip = 943; continue _fun00003 }
 915:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 18;
            entity = zulu[entity];
            entity = mike.bind(tango)(entity);
            zulu = entity.ArrowSmallUpIcon;
            _fun00004_ip = 969; continue _fun00003;
 943:
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 17;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            zulu = entity.ArrowSmallDownIcon;
 969:
            _fun00004_ip = 997; continue _fun00003;
 971:
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 16;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            zulu = entity.AtIcon;
 997:
            mike = _closure1_slot8;
            entity = {};
            backup = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[result];
            backup = backup.bind(tango)(oscar);
            if(yankee) { _fun00004_ip = 1036; continue _fun00003 }
 1023:
            oscar = backup.colors;
            oscar = oscar.TEXT_BRAND;
            _fun00004_ip = 1047; continue _fun00003;
 1036:
            backup = backup.unsafe_rawColors;
            oscar = backup.WHITE_500;
 1047:
            entity['color'] = oscar;
            oscar = 'xxs';
            entity['size'] = oscar;
            oscar = mike.bind(tango)(zulu, entity);
            zulu = _closure1_slot9;
            mike = _closure1_slot10;
            entity = {};
            result = offset.unreadBar;
            backup = new Array(3);
            backup[0] = result;
            backup[1] = output;
            backup[2] = sizing;
            entity['style'] = backup;
            backup = 'none';
            if(!kilo) { _fun00004_ip = 1112; continue _fun00003 }
 1108:
            backup = 'auto';
 1112:
            entity['pointerEvents'] = backup;
            backup = 'button';
            entity['accessibilityRole'] = backup;
            entity['onPress'] = foxtrot;
            entity['onPressIn'] = options;
            entity['onPressOut'] = golf;
            entity['hitSlop'] = romeo;
            entity['onLayout'] = report;
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot8;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[romeo];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {};
            offset = offset.text;
            oscar['style'] = offset;
            offset = 'text-xs/bold';
            oscar['variant'] = offset;
            offset = 'text-brand';
            if(!yankee) { _fun00004_ip = 1217; continue _fun00003 }
 1211:
            offset = 'always-white';
 1217:
            oscar['color'] = offset;
            offset = 1.5;
            oscar['maxFontSizeMultiplier'] = offset;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 19;
            offset = foxtrot[verify];
            offset = romeo.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(tango)(verify);
            verify = verify.t;
            verify = verify.y2b7CA;
            verify = offset.bind(yankee)(verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();