// app/design/components/ContextMenu/native/ContextMenuItem.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Pressable;
    tangon = 2;
    verify = oscard[tangon];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot4 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    golfie = golfie.bind(entity)(tangon);
    tangon = golfie.createAnimatedComponent;
    tangon = tangon.bind(golfie)(option);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = {};
            michal = {'padding': null, 'minHeight': null, 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center', 'gap': 8};
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 5;
            option = tangon[zuuluu];
            golfie = undefined;
            option = oscard.bind(golfie)(option);
            option = option.CONTEXT_MENU_ITEM_PADDING;
            michal['padding'] = option;
            zuuluu = tangon[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.CONTEXT_MENU_ITEM_BASE_HEIGHT;
            michal['minHeight'] = zuuluu;
            entity['container'] = michal;
            michal = {};
            oscard = _closure1_slot1;
            option = 6;
            zuuluu = tangon[option];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderTopLeftRadius'] = zuuluu;
            zuuluu = tangon[option];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderTopRightRadius'] = zuuluu;
            entity['roundedTop'] = michal;
            michal = {};
            zuuluu = tangon[option];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderBottomLeftRadius'] = zuuluu;
            zuuluu = tangon[option];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.radii;
            zuuluu = zuuluu.lg;
            michal['borderBottomRightRadius'] = zuuluu;
            entity['roundedBottom'] = michal;
            michal = {};
            zuuluu = 1;
            michal['borderBottomWidth'] = zuuluu;
            verify = tangon[option];
            verify = oscard.bind(golfie)(verify);
            verify = verify.colors;
            verify = verify.DIVIDER_SUBTLE;
            michal['borderBottomColor'] = verify;
            entity['border'] = michal;
            michal = {};
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.colors;
            tangon = tangon.BG_MOD_SUBTLE;
            michal['backgroundColor'] = tangon;
            entity['pressed'] = michal;
            michal = {'width': 20, 'height': 20};
            oscard = 'destructive';
            tangon = argFoo;
            if(!(oscard !== tangon)) { _fun00002_ip = 323; continue _fun00001 }
 293:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            tangon = oscard.bind(golfie)(tangon);
            tangon = tangon.colors;
            tangon = tangon.TEXT_PRIMARY;
            _fun00002_ip = 351; continue _fun00001;
 323:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            report = report[option];
            report = oscard.bind(golfie)(report);
            report = report.colors;
            tangon = report.TEXT_DANGER;
 351:
            michal['tintColor'] = tangon;
            entity['icon'] = michal;
            michal = {};
            michal['flexShrink'] = zuuluu;
            entity['label'] = michal;
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = {};
    golfie = 'function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}';
    tangon['code'] = golfie;
    var _closure1_slot8 = tangon;
    tangon = {};
    golfie = 'function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}';
    tangon['code'] = golfie;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}";
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'design/components/ContextMenu/native/ContextMenuItem.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ContextMenuItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            yankee = zuuluu.label;
            foxtra = zuuluu.IconComponent;
            ctrled = zuuluu.iconSource;
            result = zuuluu.start;
            output = zuuluu.end;
            update = zuuluu.lastInSection;
            michal = zuuluu.index;
            var _closure2_slot0 = michal;
            option = zuuluu.state;
            report = zuuluu.onPress;
            golfie = zuuluu.variant;
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00004_ip = 72; continue _fun00003 }
 68:
            golfie = 'default';
 72:
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            offset = 3;
            zuuluu = sequen[offset];
            verify = vacuum.bind(tangon)(zuuluu);
            zuuluu = verify.useAnimatedRef;
            kiloes = zuuluu.bind(verify)();
            _closure2_slot1 = kiloes;
            zuuluu = _closure1_slot7;
            romeon = zuuluu.bind(tangon)(golfie);
            source = option.pan;
            _closure2_slot2 = source;
            zuuluu = option.itemMeasurements;
            _closure2_slot3 = zuuluu;
            echoed = option.activeIndex;
            _closure2_slot4 = echoed;
            option = sequen[offset];
            backup = vacuum.bind(tangon)(option);
            verify = backup.useSharedValue;
            option = 0;
            config = verify.bind(backup)(option);
            _closure2_slot5 = config;
            option = sequen[offset];
            sizing = vacuum.bind(tangon)(option);
            backup = sizing.useAnimatedReaction;
            verify = function() { // Original name: h
                michal = _closure2_slot2;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            option = {};
            option['pan'] = source;
            verify['__closure'] = option;
            option = 11852115418144.0;
            verify['__workletHash'] = option;
            option = _closure1_slot8;
            verify['__initData'] = option;
            option = function(argFoo, argBar) { // Original name: p
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argBar;
                    tangon = null;
                    if(!(tangon != michal)) { _fun00006_ip = 272; continue _fun00005 }
 12:
                    entity = argFoo;
                    if(!(entity !== michal)) { _fun00006_ip = 272; continue _fun00005 }
 22:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 3;
                    michal = report[michal];
                    oscard = undefined;
                    golfie = zuuluu.bind(oscard)(michal);
                    report = golfie.measure;
                    zuuluu = _closure2_slot1;
                    zuuluu = report.bind(golfie)(zuuluu);
                    if(!(tangon != zuuluu)) { _fun00006_ip = 272; continue _fun00005 }
 72:
                    romeon = zuuluu.pageX;
                    yankee = zuuluu.pageY;
                    offset = zuuluu.width;
                    zuuluu = zuuluu.height;
                    option = _closure2_slot0;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 7;
                    tangon = golfie[entity];
                    tangon = report.bind(oscard)(tangon);
                    tangon = tangon.INDEX_BOUNDS_OFFSET;
                    tangon = option * tangon;
                    verify = _closure2_slot3;
                    option = verify.get;
                    verify = option.bind(verify)();
                    option = golfie[entity];
                    option = report.bind(oscard)(option);
                    option = option.INDEX_BOUNDS_PAGE_X_OFFSET;
                    option = tangon + option;
                    verify[option] = romeon;
                    verify = _closure2_slot3;
                    option = verify.get;
                    verify = option.bind(verify)();
                    option = golfie[entity];
                    option = report.bind(oscard)(option);
                    option = option.INDEX_BOUNDS_PAGE_Y_OFFSET;
                    option = tangon + option;
                    verify[option] = yankee;
                    verify = _closure2_slot3;
                    option = verify.get;
                    verify = option.bind(verify)();
                    option = golfie[entity];
                    option = report.bind(oscard)(option);
                    option = option.INDEX_BOUNDS_WIDTH_OFFSET;
                    option = tangon + option;
                    verify[option] = offset;
                    option = _closure2_slot3;
                    michal = option.get;
                    michal = michal.bind(option)();
                    entity = golfie[entity];
                    entity = report.bind(oscard)(entity);
                    entity = entity.INDEX_BOUNDS_HEIGHT_OFFSET;
                    entity = tangon + entity;
                    michal[entity] = zuuluu;
 272:
                    entity = undefined;
                    return entity;
                }
            };
            source = {};
            record = sequen[offset];
            record = vacuum.bind(tangon)(record);
            record = record.measure;
            source['measure'] = record;
            source['ref'] = kiloes;
            source['index'] = michal;
            record = 7;
            cntext = sequen[record];
            cntext = vacuum.bind(tangon)(cntext);
            cntext = cntext.INDEX_BOUNDS_OFFSET;
            source['INDEX_BOUNDS_OFFSET'] = cntext;
            source['itemMeasurements'] = zuuluu;
            cntext = sequen[record];
            cntext = vacuum.bind(tangon)(cntext);
            cntext = cntext.INDEX_BOUNDS_PAGE_X_OFFSET;
            source['INDEX_BOUNDS_PAGE_X_OFFSET'] = cntext;
            cntext = sequen[record];
            cntext = vacuum.bind(tangon)(cntext);
            cntext = cntext.INDEX_BOUNDS_PAGE_Y_OFFSET;
            source['INDEX_BOUNDS_PAGE_Y_OFFSET'] = cntext;
            cntext = sequen[record];
            cntext = vacuum.bind(tangon)(cntext);
            cntext = cntext.INDEX_BOUNDS_WIDTH_OFFSET;
            source['INDEX_BOUNDS_WIDTH_OFFSET'] = cntext;
            record = sequen[record];
            record = vacuum.bind(tangon)(record);
            record = record.INDEX_BOUNDS_HEIGHT_OFFSET;
            source['INDEX_BOUNDS_HEIGHT_OFFSET'] = record;
            option['__closure'] = source;
            source = 9571959267234.0;
            option['__workletHash'] = source;
            source = _closure1_slot9;
            option['__initData'] = source;
            option = backup.bind(sizing)(verify, option);
            option = romeon.pressed;
            source = option.backgroundColor;
            _closure2_slot6 = source;
            option = sequen[offset];
            backup = vacuum.bind(tangon)(option);
            verify = backup.useAnimatedStyle;
            option = function() { // Original name: C
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot4;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = _closure2_slot0;
                    option = michal === entity;
                    if(option) { _fun00008_ip = 47; continue _fun00007 }
 27:
                    michal = _closure2_slot5;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = 1;
                    option = entity === michal;
 47:
                    entity = {};
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 8;
                    tangon = oscard[tangon];
                    golfie = undefined;
                    oscard = report.bind(golfie)(tangon);
                    report = oscard.withSpring;
                    tangon = 'transparent';
                    if(!option) { _fun00008_ip = 90; continue _fun00007 }
 86:
                    tangon = _closure2_slot6;
 90:
                    zuuluu = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 9;
                    michal = option[michal];
                    michal = zuuluu.bind(golfie)(michal);
                    zuuluu = michal.SUBTLE_SPRING;
                    michal = 'animate-always';
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    entity['backgroundColor'] = michal;
                    return entity;
                }
            };
            sizing = {};
            sizing['activeIndex'] = echoed;
            sizing['index'] = michal;
            sizing['pressed'] = config;
            config = 8;
            config = sequen[config];
            config = vacuum.bind(tangon)(config);
            config = config.withSpring;
            sizing['withSpring'] = config;
            sizing['backgroundColor'] = source;
            source = 9;
            source = sequen[source];
            source = vacuum.bind(tangon)(source);
            source = source.SUBTLE_SPRING;
            sizing['SUBTLE_SPRING'] = source;
            option['__closure'] = sizing;
            sizing = 624481847983.0;
            option['__workletHash'] = sizing;
            sizing = _closure1_slot10;
            option['__initData'] = sizing;
            sizing = verify.bind(backup)(option);
            verify = null;
            backup = golfie;
            if(!(verify == foxtra)) { _fun00004_ip = 644; continue _fun00003 }
 588:
            golfie = verify != ctrled;
            verify = null;
            if(!golfie) { _fun00004_ip = 642; continue _fun00003 }
 597:
            source = _closure1_slot4;
            option = _closure1_slot1;
            vacuum = _closure1_slot2;
            golfie = 10;
            golfie = vacuum[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            golfie['source'] = ctrled;
            ctrled = romeon.icon;
            golfie['style'] = ctrled;
            verify = source.bind(tangon)(option, golfie);
 642:
            _fun00004_ip = 673; continue _fun00003;
 644:
            option = _closure1_slot4;
            golfie = {};
            source = 'sm';
            golfie['size'] = source;
            source = romeon.icon;
            golfie['style'] = source;
            verify = option.bind(tangon)(foxtra, golfie);
 673:
            golfie = _closure1_slot3;
            foxtra = golfie.useCallback;
            option = new Array(2);
            option[0] = michal;
            option[1] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    entity = entity.layout;
                    offset = entity.height;
                    zuuluu = entity.width;
                    entity = 0;
                    if(!(entity !== offset)) { _fun00010_ip = 148; continue _fun00009 }
 30:
                    if(!(entity !== zuuluu)) { _fun00010_ip = 148; continue _fun00009 }
 34:
                    option = _closure2_slot0;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    entity = 7;
                    tangon = golfie[entity];
                    report = undefined;
                    tangon = oscard.bind(report)(tangon);
                    tangon = tangon.INDEX_BOUNDS_OFFSET;
                    tangon = option * tangon;
                    verify = _closure2_slot3;
                    option = verify.get;
                    verify = option.bind(verify)();
                    option = golfie[entity];
                    option = oscard.bind(report)(option);
                    option = option.INDEX_BOUNDS_HEIGHT_OFFSET;
                    option = tangon + option;
                    verify[option] = offset;
                    option = _closure2_slot3;
                    michal = option.get;
                    michal = michal.bind(option)();
                    entity = golfie[entity];
                    entity = oscard.bind(report)(entity);
                    entity = entity.INDEX_BOUNDS_WIDTH_OFFSET;
                    entity = tangon + entity;
                    michal[entity] = zuuluu;
 148:
                    entity = undefined;
                    return entity;
                }
            };
            foxtra = foxtra.bind(golfie)(zuuluu, option);
            option = golfie.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = echoed;
            zuuluu[1] = michal;
            michal = function() {
                zuuluu = _closure2_slot4;
                michal = zuuluu.set;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            option = option.bind(golfie)(michal, zuuluu);
            zuuluu = golfie.useCallback;
            michal = new Array(1);
            michal[0] = echoed;
            entity = function() {
                zuuluu = _closure2_slot4;
                michal = zuuluu.set;
                entity = -1;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            golfie = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot5;
            michal = _closure1_slot6;
            entity = {};
            entity['ref'] = kiloes;
            echoed = romeon.container;
            kiloes = new Array(5);
            kiloes[0] = echoed;
            echoed = !output;
            if(!echoed) { _fun00004_ip = 799; continue _fun00003 }
 796:
            echoed = !update;
 799:
            if(!echoed) { _fun00004_ip = 808; continue _fun00003 }
 802:
            echoed = romeon.border;
 808:
            kiloes[1] = echoed;
            if(!result) { _fun00004_ip = 821; continue _fun00003 }
 815:
            result = romeon.roundedTop;
 821:
            kiloes[2] = result;
            if(!output) { _fun00004_ip = 834; continue _fun00003 }
 828:
            output = romeon.roundedBottom;
 834:
            kiloes[3] = output;
            kiloes[4] = sizing;
            entity['style'] = kiloes;
            entity['onLayout'] = foxtra;
            entity['onPressIn'] = option;
            entity['onPressOut'] = golfie;
            entity['onPress'] = report;
            report = 'button';
            entity['accessibilityRole'] = report;
            option = _closure1_slot4;
            golfie = _closure1_slot0;
            foxtra = _closure1_slot2;
            report = 11;
            report = foxtra[report];
            report = golfie.bind(tangon)(report);
            golfie = report.Text;
            report = {'animated': true, 'variant': 'text-md/medium'};
            romeon = romeon.label;
            report['style'] = romeon;
            romeon = 'text-primary';
            foxtra = 'destructive';
            if(!(foxtra === backup)) { _fun00004_ip = 947; continue _fun00003 }
 941:
            romeon = 'text-danger';
 947:
            report['color'] = romeon;
            report['children'] = yankee;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot4;
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[offset];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.View;
            oscard = {};
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ContextMenuItem'] = michal;
    return entity;
})();