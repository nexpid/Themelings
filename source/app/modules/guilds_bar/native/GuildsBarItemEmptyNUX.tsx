// app/modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.Pressable;
    var _closure1_slot4 = verify;
    verify = tango.Image;
    var _closure1_slot5 = verify;
    tango = tango.View;
    var _closure1_slot6 = tango;
    backup = 2;
    tango = oscar[backup];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    romeo = 3;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    yankee = tango.GUILD_ITEM_SIZE;
    kilo = tango.GUILD_ITEM_PADDING;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    foxtrot = tango.DM_WIDTH;
    tango = tango.EMPTY_NUX_SERVER;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MODE_CHANGE_PHYSICS;
    var _closure1_slot9 = tango;
    tango = 6;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot10 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = {'top': 4, 'left': 12, 'bottom': 4, 'right': 12};
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'position': 'relative', 'flexDirection': 'row', 'alignItems': 'center', 'marginTop': null, 'height': 55};
    offset['marginTop'] = kilo;
    offset['width'] = yankee;
    tango['container'] = offset;
    offset = {'position': 'absolute', 'left': null, 'top': 4};
    foxtrot = foxtrot - yankee;
    foxtrot = -foxtrot;
    foxtrot = foxtrot / backup;
    offset['left'] = foxtrot;
    tango['guildIndicator'] = offset;
    offset = {'width': 59, 'height': 55, 'marginLeft': 4294967293, 'marginRight': 4294967290};
    tango['icon'] = offset;
    offset = {'position': 'absolute', 'top': 16};
    offset['width'] = yankee;
    foxtrot = 10;
    foxtrot = yankee - foxtrot;
    offset['height'] = foxtrot;
    yankee = yankee / romeo;
    offset['borderRadius'] = yankee;
    tango['backdrop'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot13 = tango;
    tango = {};
    options = "function GuildsBarItemEmptyNUXTsx1(){const{withSpring,selected,activeColor,inactiveColor,MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:withSpring(selected?activeColor:inactiveColor,MODE_CHANGE_PHYSICS,'animate-always')};}";
    tango['code'] = options;
    var _closure1_slot14 = tango;
    tango = golf.memo;
    mike = function() { // Original name: GuildsBarEmptyNUX
        mike = _closure1_slot13;
        tango = undefined;
        verify = mike.bind(tango)();
        offset = _closure1_slot0;
        foxtrot = _closure1_slot2;
        mike = 8;
        mike = foxtrot[mike];
        golf = offset.bind(tango)(mike);
        report = golf.useStateFromStores;
        mike = _closure1_slot7;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure1_slot7;
            mike = zulu.getGuildId;
            mike = mike.bind(zulu)();
            entity = _closure1_slot8;
            entity = mike === entity;
            return entity;
        };
        romeo = report.bind(golf)(zulu, mike);
        var _closure2_slot0 = romeo;
        backup = _closure1_slot3;
        zulu = backup.useContext;
        mike = 9;
        mike = foxtrot[mike];
        mike = offset.bind(tango)(mike);
        mike = mike.HomeDrawerStateContext;
        mike = zulu.bind(backup)(mike);
        mike = mike.setDrawerState;
        var _closure2_slot1 = mike;
        report = backup.useCallback;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure2_slot1;
            entity = undefined;
            mike = 'closed';
            mike = zulu.bind(entity)(mike);
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 10;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.transitionToGuild;
            mike = _closure1_slot8;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        golf = report.bind(backup)(mike, zulu);
        report = 11;
        mike = foxtrot[report];
        options = offset.bind(tango)(mike);
        zulu = options.useSharedValue;
        mike = false;
        mike = zulu.bind(options)(mike);
        var _closure2_slot2 = mike;
        yankee = backup.useCallback;
        options = new Array(1);
        options[0] = mike;
        zulu = function() {
            zulu = _closure2_slot2;
            mike = zulu.set;
            entity = true;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        yankee = yankee.bind(backup)(zulu, options);
        options = backup.useCallback;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            zulu = _closure2_slot2;
            mike = zulu.set;
            entity = false;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        options = options.bind(backup)(mike, zulu);
        zulu = 12;
        mike = foxtrot[zulu];
        output = offset.bind(tango)(mike);
        kilo = output.useToken;
        sizing = _closure1_slot1;
        mike = 13;
        backup = foxtrot[mike];
        backup = sizing.bind(tango)(backup);
        backup = backup.colors;
        backup = backup.BACKGROUND_SECONDARY;
        kilo = kilo.bind(output)(backup);
        var _closure2_slot3 = kilo;
        zulu = foxtrot[zulu];
        backup = offset.bind(tango)(zulu);
        zulu = backup.useToken;
        mike = foxtrot[mike];
        mike = sizing.bind(tango)(mike);
        mike = mike.colors;
        mike = mike.BG_BRAND;
        output = zulu.bind(backup)(mike);
        var _closure2_slot4 = output;
        mike = foxtrot[report];
        zulu = offset.bind(tango)(mike);
        mike = zulu.useAnimatedStyle;
        entity = function() { // Original name: o
            _fun114595: for(var _fun114595_ip = 0; ; ) switch(_fun114595_ip) {
 0:
                entity = {};
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 14;
                tango = tango[zulu];
                zulu = undefined;
                oscar = report.bind(zulu)(tango);
                report = oscar.withSpring;
                tango = _closure2_slot0;
                if(tango) { _fun114595_ip = 48; continue _fun114595 }
 42:
                tango = _closure2_slot3;
                _fun114595_ip = 52; continue _fun114595;
 48:
                tango = _closure2_slot4;
 52:
                zulu = _closure1_slot9;
                mike = 'animate-always';
                mike = report.bind(oscar)(tango, zulu, mike);
                entity['backgroundColor'] = mike;
                return entity;
            }
        };
        backup = {};
        result = 14;
        result = foxtrot[result];
        result = offset.bind(tango)(result);
        result = result.withSpring;
        backup['withSpring'] = result;
        backup['selected'] = romeo;
        backup['activeColor'] = output;
        backup['inactiveColor'] = kilo;
        kilo = _closure1_slot9;
        backup['MODE_CHANGE_PHYSICS'] = kilo;
        entity['__closure'] = backup;
        backup = 15012639840543.0;
        entity['__workletHash'] = backup;
        backup = _closure1_slot14;
        entity['__initData'] = backup;
        kilo = mike.bind(zulu)(entity);
        zulu = _closure1_slot11;
        mike = _closure1_slot4;
        entity = {};
        backup = verify.container;
        entity['style'] = backup;
        entity['onPressIn'] = yankee;
        entity['onPressOut'] = options;
        entity['onPress'] = golf;
        yankee = true;
        entity['accessible'] = yankee;
        golf = 'button';
        entity['accessibilityRole'] = golf;
        golf = 15;
        options = foxtrot[golf];
        options = offset.bind(tango)(options);
        backup = options.intl;
        options = backup.string;
        golf = foxtrot[golf];
        golf = offset.bind(tango)(golf);
        golf = golf.t;
        golf = golf.3S2xmp;
        golf = options.bind(backup)(golf);
        entity['accessibilityLabel'] = golf;
        golf = {};
        golf['selected'] = romeo;
        entity['accessibilityState'] = golf;
        golf = _closure1_slot12;
        entity['hitSlop'] = golf;
        options = _closure1_slot10;
        report = foxtrot[report];
        report = sizing.bind(tango)(report);
        golf = report.View;
        report = {};
        output = verify.backdrop;
        backup = new Array(2);
        backup[0] = output;
        backup[1] = kilo;
        report['style'] = backup;
        golf = options.bind(tango)(golf, report);
        report = new Array(3);
        report[0] = golf;
        backup = _closure1_slot5;
        golf = {};
        kilo = verify.icon;
        golf['style'] = kilo;
        kilo = 16;
        kilo = foxtrot[kilo];
        kilo = sizing.bind(tango)(kilo);
        golf['source'] = kilo;
        kilo = 'contain';
        golf['resizeMode'] = kilo;
        golf = options.bind(tango)(backup, golf);
        report[1] = golf;
        golf = _closure1_slot6;
        oscar = {};
        verify = verify.guildIndicator;
        oscar['style'] = verify;
        verify = 17;
        verify = foxtrot[verify];
        verify = offset.bind(tango)(verify);
        offset = verify.UnreadIndicator;
        verify = {};
        yankee = yankee === romeo;
        verify['selected'] = yankee;
        verify = options.bind(tango)(offset, verify);
        oscar['children'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[2] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guilds_bar/native/GuildsBarItemEmptyNUX.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();