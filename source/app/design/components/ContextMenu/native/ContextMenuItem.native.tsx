// app/design/components/ContextMenu/native/ContextMenuItem.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Pressable;
    tango = 2;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot4 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    golf = golf.bind(entity)(tango);
    tango = golf.createAnimatedComponent;
    tango = tango.bind(golf)(options);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function(argFoo) {
        _fun105801: for(var _fun105801_ip = 0; ; ) switch(_fun105801_ip) {
 0:
            entity = {};
            mike = {'padding': null, 'minHeight': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'gap': 8};
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 5;
            options = tango[zulu];
            golf = undefined;
            options = oscar.bind(golf)(options);
            options = options.CONTEXT_MENU_ITEM_PADDING;
            mike['padding'] = options;
            zulu = tango[zulu];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            mike['minHeight'] = zulu;
            entity['container'] = mike;
            mike = {};
            oscar = _closure1_slot1;
            options = 6;
            zulu = tango[options];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderTopLeftRadius'] = zulu;
            zulu = tango[options];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderTopRightRadius'] = zulu;
            entity['roundedTop'] = mike;
            mike = {};
            zulu = tango[options];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderBottomLeftRadius'] = zulu;
            zulu = tango[options];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.radii;
            zulu = zulu.lg;
            mike['borderBottomRightRadius'] = zulu;
            entity['roundedBottom'] = mike;
            mike = {};
            zulu = 1;
            mike['borderBottomWidth'] = zulu;
            verify = tango[options];
            verify = oscar.bind(golf)(verify);
            verify = verify.colors;
            verify = verify.DIVIDER_SUBTLE;
            mike['borderBottomColor'] = verify;
            entity['border'] = mike;
            mike = {};
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.colors;
            tango = tango.BG_MOD_SUBTLE;
            mike['backgroundColor'] = tango;
            entity['pressed'] = mike;
            mike = {'width': 20, 'height': 20};
            oscar = 'destructive';
            tango = argFoo;
            if(!(oscar !== tango)) { _fun105801_ip = 323; continue _fun105801 }
 293:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            tango = tango[options];
            tango = oscar.bind(golf)(tango);
            tango = tango.colors;
            tango = tango.TEXT_PRIMARY;
            _fun105801_ip = 351; continue _fun105801;
 323:
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            report = report[options];
            report = oscar.bind(golf)(report);
            report = report.colors;
            tango = report.TEXT_DANGER;
 351:
            mike['tintColor'] = tango;
            entity['icon'] = mike;
            mike = {};
            mike['flexShrink'] = zulu;
            entity['label'] = mike;
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = {};
    golf = 'function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}';
    tango['code'] = golf;
    var _closure1_slot8 = tango;
    tango = {};
    golf = 'function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}';
    tango['code'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}";
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/ContextMenu/native/ContextMenuItem.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ContextMenuItem
        _fun105802: for(var _fun105802_ip = 0; ; ) switch(_fun105802_ip) {
 0:
            zulu = argFoo;
            yankee = zulu.label;
            foxtrot = zulu.IconComponent;
            control = zulu.iconSource;
            result = zulu.start;
            output = zulu.end;
            update = zulu.lastInSection;
            mike = zulu.index;
            var _closure2_slot0 = mike;
            options = zulu.state;
            report = zulu.onPress;
            golf = zulu.variant;
            tango = undefined;
            if(!(golf === tango)) { _fun105802_ip = 72; continue _fun105802 }
 68:
            golf = 'default';
 72:
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            vacuum = _closure1_slot0;
            sequence = _closure1_slot2;
            offset = 3;
            zulu = sequence[offset];
            verify = vacuum.bind(tango)(zulu);
            zulu = verify.useAnimatedRef;
            kilo = zulu.bind(verify)();
            _closure2_slot1 = kilo;
            zulu = _closure1_slot7;
            romeo = zulu.bind(tango)(golf);
            source = options.pan;
            _closure2_slot2 = source;
            zulu = options.itemMeasurements;
            _closure2_slot3 = zulu;
            echo = options.activeIndex;
            _closure2_slot4 = echo;
            options = sequence[offset];
            backup = vacuum.bind(tango)(options);
            verify = backup.useSharedValue;
            options = 0;
            config = verify.bind(backup)(options);
            _closure2_slot5 = config;
            options = sequence[offset];
            sizing = vacuum.bind(tango)(options);
            backup = sizing.useAnimatedReaction;
            verify = function() { // Original name: h
                mike = _closure2_slot2;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            options = {};
            options['pan'] = source;
            verify['__closure'] = options;
            options = 11852115418144.0;
            verify['__workletHash'] = options;
            options = _closure1_slot8;
            verify['__initData'] = options;
            options = function(argFoo, argBar) { // Original name: p
                _fun105804: for(var _fun105804_ip = 0; ; ) switch(_fun105804_ip) {
 0:
                    mike = argBar;
                    tango = null;
                    if(!(tango != mike)) { _fun105804_ip = 272; continue _fun105804 }
 12:
                    entity = argFoo;
                    if(!(entity !== mike)) { _fun105804_ip = 272; continue _fun105804 }
 22:
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 3;
                    mike = report[mike];
                    oscar = undefined;
                    golf = zulu.bind(oscar)(mike);
                    report = golf.measure;
                    zulu = _closure2_slot1;
                    zulu = report.bind(golf)(zulu);
                    if(!(tango != zulu)) { _fun105804_ip = 272; continue _fun105804 }
 72:
                    romeo = zulu.pageX;
                    yankee = zulu.pageY;
                    offset = zulu.width;
                    zulu = zulu.height;
                    options = _closure2_slot0;
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    entity = 7;
                    tango = golf[entity];
                    tango = report.bind(oscar)(tango);
                    tango = tango.INDEX_BOUNDS_OFFSET;
                    tango = options * tango;
                    verify = _closure2_slot3;
                    options = verify.get;
                    verify = options.bind(verify)();
                    options = golf[entity];
                    options = report.bind(oscar)(options);
                    options = options.INDEX_BOUNDS_PAGE_X_OFFSET;
                    options = tango + options;
                    verify[options] = romeo;
                    verify = _closure2_slot3;
                    options = verify.get;
                    verify = options.bind(verify)();
                    options = golf[entity];
                    options = report.bind(oscar)(options);
                    options = options.INDEX_BOUNDS_PAGE_Y_OFFSET;
                    options = tango + options;
                    verify[options] = yankee;
                    verify = _closure2_slot3;
                    options = verify.get;
                    verify = options.bind(verify)();
                    options = golf[entity];
                    options = report.bind(oscar)(options);
                    options = options.INDEX_BOUNDS_WIDTH_OFFSET;
                    options = tango + options;
                    verify[options] = offset;
                    options = _closure2_slot3;
                    mike = options.get;
                    mike = mike.bind(options)();
                    entity = golf[entity];
                    entity = report.bind(oscar)(entity);
                    entity = entity.INDEX_BOUNDS_HEIGHT_OFFSET;
                    entity = tango + entity;
                    mike[entity] = zulu;
 272:
                    entity = undefined;
                    return entity;
                }
            };
            source = {};
            record = sequence[offset];
            record = vacuum.bind(tango)(record);
            record = record.measure;
            source['measure'] = record;
            source['ref'] = kilo;
            source['index'] = mike;
            record = 7;
            context = sequence[record];
            context = vacuum.bind(tango)(context);
            context = context.INDEX_BOUNDS_OFFSET;
            source['INDEX_BOUNDS_OFFSET'] = context;
            source['itemMeasurements'] = zulu;
            context = sequence[record];
            context = vacuum.bind(tango)(context);
            context = context.INDEX_BOUNDS_PAGE_X_OFFSET;
            source['INDEX_BOUNDS_PAGE_X_OFFSET'] = context;
            context = sequence[record];
            context = vacuum.bind(tango)(context);
            context = context.INDEX_BOUNDS_PAGE_Y_OFFSET;
            source['INDEX_BOUNDS_PAGE_Y_OFFSET'] = context;
            context = sequence[record];
            context = vacuum.bind(tango)(context);
            context = context.INDEX_BOUNDS_WIDTH_OFFSET;
            source['INDEX_BOUNDS_WIDTH_OFFSET'] = context;
            record = sequence[record];
            record = vacuum.bind(tango)(record);
            record = record.INDEX_BOUNDS_HEIGHT_OFFSET;
            source['INDEX_BOUNDS_HEIGHT_OFFSET'] = record;
            options['__closure'] = source;
            source = 9571959267234.0;
            options['__workletHash'] = source;
            source = _closure1_slot9;
            options['__initData'] = source;
            options = backup.bind(sizing)(verify, options);
            options = romeo.pressed;
            source = options.backgroundColor;
            _closure2_slot6 = source;
            options = sequence[offset];
            backup = vacuum.bind(tango)(options);
            verify = backup.useAnimatedStyle;
            options = function() { // Original name: C
                _fun105805: for(var _fun105805_ip = 0; ; ) switch(_fun105805_ip) {
 0:
                    mike = _closure2_slot4;
                    entity = mike.get;
                    mike = entity.bind(mike)();
                    entity = _closure2_slot0;
                    options = mike === entity;
                    if(options) { _fun105805_ip = 47; continue _fun105805 }
 27:
                    mike = _closure2_slot5;
                    entity = mike.get;
                    mike = entity.bind(mike)();
                    entity = 1;
                    options = entity === mike;
 47:
                    entity = {};
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 8;
                    tango = oscar[tango];
                    golf = undefined;
                    oscar = report.bind(golf)(tango);
                    report = oscar.withSpring;
                    tango = 'transparent';
                    if(!options) { _fun105805_ip = 90; continue _fun105805 }
 86:
                    tango = _closure2_slot6;
 90:
                    zulu = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 9;
                    mike = options[mike];
                    mike = zulu.bind(golf)(mike);
                    zulu = mike.SUBTLE_SPRING;
                    mike = 'animate-always';
                    mike = report.bind(oscar)(tango, zulu, mike);
                    entity['backgroundColor'] = mike;
                    return entity;
                }
            };
            sizing = {};
            sizing['activeIndex'] = echo;
            sizing['index'] = mike;
            sizing['pressed'] = config;
            config = 8;
            config = sequence[config];
            config = vacuum.bind(tango)(config);
            config = config.withSpring;
            sizing['withSpring'] = config;
            sizing['backgroundColor'] = source;
            source = 9;
            source = sequence[source];
            source = vacuum.bind(tango)(source);
            source = source.SUBTLE_SPRING;
            sizing['SUBTLE_SPRING'] = source;
            options['__closure'] = sizing;
            sizing = 624481847983.0;
            options['__workletHash'] = sizing;
            sizing = _closure1_slot10;
            options['__initData'] = sizing;
            sizing = verify.bind(backup)(options);
            verify = null;
            backup = golf;
            if(!(verify == foxtrot)) { _fun105802_ip = 644; continue _fun105802 }
 588:
            golf = verify != control;
            verify = null;
            if(!golf) { _fun105802_ip = 642; continue _fun105802 }
 597:
            source = _closure1_slot4;
            options = _closure1_slot1;
            vacuum = _closure1_slot2;
            golf = 10;
            golf = vacuum[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['source'] = control;
            control = romeo.icon;
            golf['style'] = control;
            verify = source.bind(tango)(options, golf);
 642:
            _fun105802_ip = 673; continue _fun105802;
 644:
            options = _closure1_slot4;
            golf = {};
            source = 'sm';
            golf['size'] = source;
            source = romeo.icon;
            golf['style'] = source;
            verify = options.bind(tango)(foxtrot, golf);
 673:
            golf = _closure1_slot3;
            foxtrot = golf.useCallback;
            options = new Array(2);
            options[0] = mike;
            options[1] = zulu;
            zulu = function(argFoo) {
                _fun105806: for(var _fun105806_ip = 0; ; ) switch(_fun105806_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    entity = entity.layout;
                    offset = entity.height;
                    zulu = entity.width;
                    entity = 0;
                    if(!(entity !== offset)) { _fun105806_ip = 148; continue _fun105806 }
 30:
                    if(!(entity !== zulu)) { _fun105806_ip = 148; continue _fun105806 }
 34:
                    options = _closure2_slot0;
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    entity = 7;
                    tango = golf[entity];
                    report = undefined;
                    tango = oscar.bind(report)(tango);
                    tango = tango.INDEX_BOUNDS_OFFSET;
                    tango = options * tango;
                    verify = _closure2_slot3;
                    options = verify.get;
                    verify = options.bind(verify)();
                    options = golf[entity];
                    options = oscar.bind(report)(options);
                    options = options.INDEX_BOUNDS_HEIGHT_OFFSET;
                    options = tango + options;
                    verify[options] = offset;
                    options = _closure2_slot3;
                    mike = options.get;
                    mike = mike.bind(options)();
                    entity = golf[entity];
                    entity = oscar.bind(report)(entity);
                    entity = entity.INDEX_BOUNDS_WIDTH_OFFSET;
                    entity = tango + entity;
                    mike[entity] = zulu;
 148:
                    entity = undefined;
                    return entity;
                }
            };
            foxtrot = foxtrot.bind(golf)(zulu, options);
            options = golf.useCallback;
            zulu = new Array(2);
            zulu[0] = echo;
            zulu[1] = mike;
            mike = function() {
                zulu = _closure2_slot4;
                mike = zulu.set;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            options = options.bind(golf)(mike, zulu);
            zulu = golf.useCallback;
            mike = new Array(1);
            mike[0] = echo;
            entity = function() {
                zulu = _closure2_slot4;
                mike = zulu.set;
                entity = -1;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            golf = zulu.bind(golf)(entity, mike);
            zulu = _closure1_slot5;
            mike = _closure1_slot6;
            entity = {};
            entity['ref'] = kilo;
            echo = romeo.container;
            kilo = new Array(5);
            kilo[0] = echo;
            echo = !output;
            if(!echo) { _fun105802_ip = 799; continue _fun105802 }
 796:
            echo = !update;
 799:
            if(!echo) { _fun105802_ip = 808; continue _fun105802 }
 802:
            echo = romeo.border;
 808:
            kilo[1] = echo;
            if(!result) { _fun105802_ip = 821; continue _fun105802 }
 815:
            result = romeo.roundedTop;
 821:
            kilo[2] = result;
            if(!output) { _fun105802_ip = 834; continue _fun105802 }
 828:
            output = romeo.roundedBottom;
 834:
            kilo[3] = output;
            kilo[4] = sizing;
            entity['style'] = kilo;
            entity['onLayout'] = foxtrot;
            entity['onPressIn'] = options;
            entity['onPressOut'] = golf;
            entity['onPress'] = report;
            report = 'button';
            entity['accessibilityRole'] = report;
            options = _closure1_slot4;
            golf = _closure1_slot0;
            foxtrot = _closure1_slot2;
            report = 11;
            report = foxtrot[report];
            report = golf.bind(tango)(report);
            golf = report.Text;
            report = {'animated': true, 'variant': 'text-md/medium'};
            romeo = romeo.label;
            report['style'] = romeo;
            romeo = 'text-primary';
            foxtrot = 'destructive';
            if(!(foxtrot === backup)) { _fun105802_ip = 947; continue _fun105802 }
 941:
            romeo = 'text-danger';
 947:
            report['color'] = romeo;
            report['children'] = yankee;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot4;
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[offset];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.View;
            oscar = {};
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ContextMenuItem'] = mike;
    return entity;
})();