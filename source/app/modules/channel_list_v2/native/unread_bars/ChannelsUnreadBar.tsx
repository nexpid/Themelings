// app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.Pressable;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    offset = tangon.getScaledSearchBarHeight;
    var _closure1_slot5 = offset;
    tangon = tangon.VIEWABILITY_CONFIG;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 5;
    offset = oscard[tangon];
    offset = report.bind(entity)(offset);
    offset = offset.jsx;
    var _closure1_slot8 = offset;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = option.bind(entity)(tangon);
    tangon = option.createAnimatedComponent;
    tangon = tangon.bind(option)(verify);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo, argBar) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = {};
            michal = {'position': 'absolute', 'right': '50%', 'zIndex': 1, 'marginVertical': 12, 'marginHorizontal': 0, 'paddingRight': 9, 'paddingLeft': null, 'paddingVertical': 4, 'minHeight': 24, 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center', 'borderRadius': null, 'backgroundColor': null, 'elevation': 4};
            offset = 1;
            golfie = 9;
            report = 5;
            if(!tangon) { _fun00002_ip = 34; continue _fun00001 }
 31:
            report = 6;
 34:
            michal['paddingLeft'] = report;
            yankee = 4;
            romeon = _closure1_slot1;
            oscard = _closure1_slot2;
            option = 8;
            verify = oscard[option];
            oscard = undefined;
            verify = romeon.bind(oscard)(verify);
            verify = verify.radii;
            verify = verify.round;
            michal['borderRadius'] = verify;
            romeon = _closure1_slot1;
            verify = _closure1_slot2;
            verify = verify[option];
            verify = romeon.bind(oscard)(verify);
            if(tangon) { _fun00002_ip = 131; continue _fun00001 }
 104:
            romeon = verify.colors;
            tangon = argBar;
            if(tangon) { _fun00002_ip = 123; continue _fun00001 }
 115:
            tangon = romeon.BG_SURFACE_OVERLAY;
            _fun00002_ip = 129; continue _fun00001;
 123:
            tangon = romeon.ACTION_SHEET_GRADIENT_BG;
 129:
            _fun00002_ip = 142; continue _fun00001;
 131:
            verify = verify.unsafe_rawColors;
            tangon = verify.RED_400;
 142:
            michal['backgroundColor'] = tangon;
            verify = _closure1_slot1;
            tangon = _closure1_slot2;
            romeon = tangon[option];
            romeon = verify.bind(oscard)(romeon);
            romeon = romeon.colors;
            romeon = romeon.BLACK;
            michal['shadowColor'] = romeon;
            romeon = {'width': 0, 'height': 1};
            michal['shadowOffset'] = romeon;
            romeon = 0.08;
            michal['shadowOpacity'] = romeon;
            michal['shadowRadius'] = yankee;
            michal['borderWidth'] = offset;
            option = tangon[option];
            option = verify.bind(oscard)(option);
            option = option.colors;
            option = option.BORDER_SUBTLE;
            michal['borderColor'] = option;
            entity['unreadBar'] = michal;
            michal = {'textTransform': 'uppercase', 'marginTop': null, 'marginLeft': 2, 'marginRight': 0};
            report = _closure1_slot0;
            tangon = tangon[golfie];
            report = report.bind(oscard)(tangon);
            tangon = report.isAndroid;
            tangon = tangon.bind(report)();
            zuuluu = 0;
            if(!tangon) { _fun00002_ip = 298; continue _fun00001 }
 292:
            zuuluu = -1;
 298:
            michal['marginTop'] = zuuluu;
            entity['text'] = michal;
            return entity;
        }
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot11 = tangon;
    tangon = {};
    option = "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}";
    tangon['code'] = option;
    var _closure1_slot12 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: ChannelsUnreadBar
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            michal = tangon.position;
            var _closure2_slot0 = michal;
            kiloes = tangon.shown;
            var _closure2_slot1 = kiloes;
            golfie = tangon.onPress;
            var _closure2_slot2 = golfie;
            report = tangon.isMention;
            var _closure2_slot3 = report;
            vacuum = tangon.guildChannelsListUnreadBarInsetEnd;
            var _closure2_slot4 = vacuum;
            target = tangon.scrollPosition;
            var _closure2_slot5 = target;
            papara = tangon.listPaddingTop;
            var _closure2_slot6 = papara;
            zuuluu = tangon.endReachedCounter;
            var _closure2_slot7 = zuuluu;
            oscard = tangon.headerHeight;
            var _closure2_slot8 = oscard;
            tangon = undefined;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            var _closure2_slot15 = tangon;
            var _closure2_slot16 = tangon;
            var _closure2_slot17 = tangon;
            yankee = _closure1_slot4;
            offset = yankee.useState;
            option = null;
            option = option != report;
            if(!option) { _fun00004_ip = 155; continue _fun00003 }
 152:
            option = report;
 155:
            option = offset.bind(yankee)(option);
            sierra = _closure1_slot3;
            status = 2;
            option = sierra.bind(tangon)(option, status);
            record = 0;
            yankee = option[record];
            _closure2_slot9 = yankee;
            backup = 1;
            option = option[backup];
            _closure2_slot10 = option;
            config = _closure1_slot4;
            offset = config.useEffect;
            option = new Array(1);
            option[0] = report;
            report = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 28; continue _fun00005 }
 13:
                    zuuluu = _closure2_slot10;
                    michal = _closure2_slot3;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 28:
                    entity = undefined;
                    return entity;
                }
            };
            report = offset.bind(config)(report, option);
            option = _closure1_slot1;
            update = _closure1_slot2;
            report = 10;
            report = update[report];
            report = option.bind(tangon)(report);
            option = report.bind(tangon)();
            report = _closure1_slot11;
            offset = report.bind(tangon)(yankee, option);
            echoed = _closure1_slot0;
            report = 11;
            report = update[report];
            option = echoed.bind(tangon)(report);
            report = option.useFontScale;
            cntext = report.bind(option)();
            romeon = 12;
            report = update[romeon];
            report = echoed.bind(tangon)(report);
            report = report.TextStyleSheet;
            report = report.text-xs/bold;
            report = report.lineHeight;
            report = report * cntext;
            result = 8;
            foxtra = report + result;
            ctrled = 6;
            report = update[ctrled];
            option = echoed.bind(tangon)(report);
            report = option.useSharedValue;
            sizing = report.bind(option)(record);
            _closure2_slot11 = sizing;
            report = update[ctrled];
            option = echoed.bind(tangon)(report);
            report = option.useSharedValue;
            sequen = report.bind(option)(foxtra);
            _closure2_slot12 = sequen;
            foxtra = config.useCallback;
            option = new Array(2);
            option[0] = sizing;
            option[1] = sequen;
            report = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argFoo;
                    entity = michal.nativeEvent;
                    entity = entity.layout;
                    report = entity.width;
                    entity = 0;
                    if(!(entity !== report)) { _fun00008_ip = 42; continue _fun00007 }
 25:
                    tangon = _closure2_slot11;
                    zuuluu = tangon.set;
                    zuuluu = zuuluu.bind(tangon)(report);
 42:
                    michal = michal.nativeEvent;
                    michal = michal.layout;
                    zuuluu = michal.height;
                    if(!(entity !== zuuluu)) { _fun00008_ip = 79; continue _fun00007 }
 62:
                    michal = _closure2_slot12;
                    entity = michal.set;
                    entity = entity.bind(michal)(zuuluu);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            report = foxtra.bind(config)(report, option);
            output = config.useEffect;
            foxtra = new Array(3);
            foxtra[0] = kiloes;
            foxtra[1] = yankee;
            foxtra[2] = michal;
            option = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00010_ip = 76; continue _fun00009 }
 10:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 13;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.trackWithMetadata;
                    entity = _closure1_slot7;
                    michal = entity.CHANNEL_LIST_UNREAD_BADGE_VIEWED;
                    entity = {};
                    oscard = _closure2_slot9;
                    entity['is_mention'] = oscard;
                    report = _closure2_slot0;
                    entity['position'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 76:
                    entity = undefined;
                    return entity;
                }
            };
            option = output.bind(config)(option, foxtra);
            foxtra = config.useCallback;
            option = new Array(3);
            option[0] = golfie;
            option[1] = michal;
            option[2] = yankee;
            golfie = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 13;
                zuuluu = zuuluu[entity];
                entity = undefined;
                oscard = tangon.bind(entity)(zuuluu);
                report = oscard.trackWithMetadata;
                michal = _closure1_slot7;
                tangon = michal.CHANNEL_LIST_UNREAD_BADGE_CLICKED;
                zuuluu = {};
                golfie = _closure2_slot9;
                zuuluu['is_mention'] = golfie;
                golfie = _closure2_slot0;
                zuuluu['position'] = golfie;
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                michal = _closure2_slot2;
                michal = michal.bind(entity)();
                return entity;
            };
            foxtra = foxtra.bind(config)(golfie, option);
            golfie = update[ctrled];
            option = echoed.bind(tangon)(golfie);
            golfie = option.useSharedValue;
            source = golfie.bind(option)(record);
            _closure2_slot13 = source;
            output = config.useCallback;
            option = new Array(1);
            option[0] = source;
            golfie = function() {
                zuuluu = _closure2_slot13;
                michal = zuuluu.set;
                entity = 1;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            option = output.bind(config)(golfie, option);
            limora = config.useCallback;
            output = new Array(1);
            output[0] = source;
            golfie = function() {
                zuuluu = _closure2_slot13;
                michal = zuuluu.set;
                entity = 0;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            golfie = limora.bind(config)(golfie, output);
            limora = config.useMemo;
            output = new Array(2);
            output[0] = oscard;
            output[1] = michal;
            oscard = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = 'bottom';
                    if(!(entity !== zuuluu)) { _fun00012_ip = 27; continue _fun00011 }
 15:
                    entity = {};
                    michal = _closure2_slot8;
                    entity['top'] = michal;
                    _fun00012_ip = 38; continue _fun00011;
 27:
                    michal = {};
                    zuuluu = 0;
                    michal['bottom'] = zuuluu;
                    entity = michal;
 38:
                    return entity;
                }
            };
            output = limora.bind(config)(oscard, output);
            oscard = _closure1_slot5;
            cntext = oscard.bind(tangon)(cntext);
            _closure2_slot14 = cntext;
            limora = config.useState;
            oscard = false;
            oscard = limora.bind(config)(oscard);
            oscard = sierra.bind(tangon)(oscard, status);
            record = oscard[record];
            _closure2_slot15 = record;
            oscard = oscard[backup];
            _closure2_slot16 = oscard;
            backup = config.useEffect;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 26; continue _fun00013 }
 13:
                    zuuluu = _closure2_slot16;
                    michal = undefined;
                    entity = true;
                    entity = zuuluu.bind(michal)(entity);
 26:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = backup.bind(config)(zuuluu, oscard);
            backup = config.useCallback;
            oscard = function() {
                entity = global;
                tangon = entity.setTimeout;
                entity = _closure1_slot6;
                michal = entity.minimumViewTime;
                entity = 1;
                zuuluu = michal + entity;
                entity = undefined;
                michal = function() {
                    zuuluu = _closure2_slot16;
                    entity = undefined;
                    michal = false;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = tangon.bind(entity)(michal, zuuluu);
                return entity;
            };
            zuuluu = new Array(0);
            config = backup.bind(config)(oscard, zuuluu);
            _closure2_slot17 = config;
            zuuluu = update[ctrled];
            oscard = echoed.bind(tangon)(zuuluu);
            zuuluu = oscard.useAnimatedStyle;
            entity = function() { // Original name: X
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00016_ip = 90; continue _fun00015 }
 10:
                    zuuluu = _closure2_slot0;
                    michal = 'top';
                    if(!(michal !== zuuluu)) { _fun00016_ip = 31; continue _fun00015 }
 22:
                    michal = _closure2_slot15;
                    michal = !michal;
                    _fun00016_ip = 87; continue _fun00015;
 31:
                    zuuluu = _closure2_slot5;
                    report = null;
                    zuuluu = report != zuuluu;
                    if(!zuuluu) { _fun00016_ip = 52; continue _fun00015 }
 44:
                    tangon = _closure2_slot6;
                    zuuluu = report != tangon;
 52:
                    if(!zuuluu) { _fun00016_ip = 84; continue _fun00015 }
 55:
                    report = _closure2_slot5;
                    tangon = report.get;
                    report = tangon.bind(report)();
                    oscard = _closure2_slot6;
                    tangon = _closure2_slot14;
                    tangon = oscard + tangon;
                    zuuluu = report > tangon;
 84:
                    michal = zuuluu;
 87:
                    entity = michal;
 90:
                    michal = _closure2_slot15;
                    if(!michal) { _fun00016_ip = 140; continue _fun00015 }
 97:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.runOnJS;
                    michal = _closure2_slot17;
                    michal = tangon.bind(report)(michal);
                    michal = michal.bind(zuuluu)();
 140:
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = 12;
                    tangon = zuuluu - michal;
                    report = _closure2_slot0;
                    zuuluu = 'bottom';
                    if(entity) { _fun00016_ip = 190; continue _fun00015 }
 171:
                    michal = -1;
                    if(!(zuuluu === report)) { _fun00016_ip = 184; continue _fun00015 }
 181:
                    michal = 1;
 184:
                    foxtra = tangon * michal;
                    _fun00016_ip = 230; continue _fun00015;
 190:
                    michal = 0;
                    if(!(zuuluu === report)) { _fun00016_ip = 227; continue _fun00015 }
 196:
                    report = _closure2_slot4;
                    zuuluu = null;
                    zuuluu = zuuluu != report;
                    michal = 0;
                    if(!zuuluu) { _fun00016_ip = 227; continue _fun00015 }
 211:
                    tangon = _closure2_slot4;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    michal = -zuuluu;
 227:
                    foxtra = michal;
 230:
                    michal = 0;
                    backup = 0;
                    if(!entity) { _fun00016_ip = 240; continue _fun00015 }
 237:
                    backup = 1;
 240:
                    zuuluu = _closure2_slot11;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    entity = entity > michal;
                    report = 1;
                    if(!entity) { _fun00016_ip = 300; continue _fun00015 }
 263:
                    michal = _closure2_slot11;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = 5;
                    michal = michal + entity;
                    zuuluu = _closure2_slot11;
                    entity = zuuluu.get;
                    entity = entity.bind(zuuluu)();
                    report = michal / entity;
 300:
                    entity = {};
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    oscard = 14;
                    michal = offset[oscard];
                    option = undefined;
                    romeon = verify.bind(option)(michal);
                    golfie = romeon.withSpring;
                    tangon = 15;
                    michal = offset[tangon];
                    michal = verify.bind(option)(michal);
                    zuuluu = michal.springStandard;
                    michal = 'animate-always';
                    michal = golfie.bind(romeon)(backup, zuuluu, michal);
                    entity['opacity'] = michal;
                    zuuluu = {};
                    michal = offset[oscard];
                    romeon = verify.bind(option)(michal);
                    golfie = romeon.withSpring;
                    michal = offset[tangon];
                    michal = verify.bind(option)(michal);
                    michal = michal.springStandard;
                    michal = golfie.bind(romeon)(foxtra, michal);
                    zuuluu['translateY'] = michal;
                    michal = new Array(3);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    romeon = _closure2_slot11;
                    golfie = romeon.get;
                    romeon = golfie.bind(romeon)();
                    golfie = 2;
                    golfie = romeon / golfie;
                    zuuluu['translateX'] = golfie;
                    michal[1] = zuuluu;
                    zuuluu = {};
                    oscard = offset[oscard];
                    golfie = verify.bind(option)(oscard);
                    oscard = golfie.withSpring;
                    romeon = 6;
                    romeon = offset[romeon];
                    backup = verify.bind(option)(romeon);
                    foxtra = backup.interpolate;
                    romeon = _closure2_slot13;
                    yankee = romeon.get;
                    romeon = yankee.bind(romeon)();
                    yankee = [1];
                    yankee[1] = report;
                    report = [0, 1];
                    report = foxtra.bind(backup)(romeon, report, yankee);
                    tangon = offset[tangon];
                    tangon = verify.bind(option)(tangon);
                    tangon = tangon.ON_PRESS_SPRING;
                    tangon = oscard.bind(golfie)(report, tangon);
                    zuuluu['scale'] = tangon;
                    michal[2] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            backup = {};
            backup['shown'] = kiloes;
            backup['position'] = michal;
            backup['scrollPosition'] = target;
            backup['listPaddingTop'] = papara;
            backup['searchBarHeight'] = cntext;
            backup['justReachedEnd'] = record;
            record = update[ctrled];
            record = echoed.bind(tangon)(record);
            record = record.runOnJS;
            backup['runOnJS'] = record;
            backup['resetReachedEnd'] = config;
            backup['height'] = sequen;
            backup['MARGIN'] = romeon;
            backup['guildChannelsListUnreadBarInsetEnd'] = vacuum;
            backup['width'] = sizing;
            sizing = 14;
            sizing = update[sizing];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.withSpring;
            backup['withSpring'] = sizing;
            sizing = 15;
            vacuum = update[sizing];
            vacuum = echoed.bind(tangon)(vacuum);
            vacuum = vacuum.springStandard;
            backup['springStandard'] = vacuum;
            ctrled = update[ctrled];
            ctrled = echoed.bind(tangon)(ctrled);
            ctrled = ctrled.interpolate;
            backup['interpolate'] = ctrled;
            backup['pressed'] = source;
            sizing = update[sizing];
            sizing = echoed.bind(tangon)(sizing);
            sizing = sizing.ON_PRESS_SPRING;
            backup['ON_PRESS_SPRING'] = sizing;
            entity['__closure'] = backup;
            backup = 978162815161.0;
            entity['__workletHash'] = backup;
            backup = _closure1_slot12;
            entity['__initData'] = backup;
            sizing = zuuluu.bind(oscard)(entity);
            if(yankee) { _fun00004_ip = 971; continue _fun00003 }
 907:
            entity = 'bottom';
            if(!(entity !== michal)) { _fun00004_ip = 943; continue _fun00003 }
 915:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 18;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            zuuluu = entity.ArrowSmallUpIcon;
            _fun00004_ip = 969; continue _fun00003;
 943:
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 17;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            zuuluu = entity.ArrowSmallDownIcon;
 969:
            _fun00004_ip = 997; continue _fun00003;
 971:
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 16;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            zuuluu = entity.AtIcon;
 997:
            michal = _closure1_slot8;
            entity = {};
            backup = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[result];
            backup = backup.bind(tangon)(oscard);
            if(yankee) { _fun00004_ip = 1036; continue _fun00003 }
 1023:
            oscard = backup.colors;
            oscard = oscard.TEXT_BRAND;
            _fun00004_ip = 1047; continue _fun00003;
 1036:
            backup = backup.unsafe_rawColors;
            oscard = backup.WHITE_500;
 1047:
            entity['color'] = oscard;
            oscard = 'xxs';
            entity['size'] = oscard;
            oscard = michal.bind(tangon)(zuuluu, entity);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot10;
            entity = {};
            result = offset.unreadBar;
            backup = new Array(3);
            backup[0] = result;
            backup[1] = output;
            backup[2] = sizing;
            entity['style'] = backup;
            backup = 'none';
            if(!kiloes) { _fun00004_ip = 1112; continue _fun00003 }
 1108:
            backup = 'auto';
 1112:
            entity['pointerEvents'] = backup;
            backup = 'button';
            entity['accessibilityRole'] = backup;
            entity['onPress'] = foxtra;
            entity['onPressIn'] = option;
            entity['onPressOut'] = golfie;
            entity['hitSlop'] = romeon;
            entity['onLayout'] = report;
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot8;
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[romeon];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {};
            offset = offset.text;
            oscard['style'] = offset;
            offset = 'text-xs/bold';
            oscard['variant'] = offset;
            offset = 'text-brand';
            if(!yankee) { _fun00004_ip = 1217; continue _fun00003 }
 1211:
            offset = 'always-white';
 1217:
            oscard['color'] = offset;
            offset = 1.5;
            oscard['maxFontSizeMultiplier'] = offset;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 19;
            offset = foxtra[verify];
            offset = romeon.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.y2b7CA;
            verify = offset.bind(yankee)(verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();