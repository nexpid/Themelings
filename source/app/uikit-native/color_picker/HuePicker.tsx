// app/uikit-native/color_picker/HuePicker.tsx
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
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    tango = ['#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ff0000'];
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'justifyContent': 'center', 'alignItems': 'center'};
    tango['container'] = verify;
    verify = {'left': 0, 'position': 'absolute', 'borderColor': null, 'width': 24, 'height': 36, 'borderRadius': null, 'borderWidth': 2};
    offset = 4;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.HEADER_PRIMARY;
    verify['borderColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    tango['slider'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.xs;
    verify['borderRadius'] = offset;
    tango['colorBar'] = verify;
    verify = {'minWidth': 240, 'height': 32};
    tango['colorBarInner'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = {};
    golf = 'function HuePickerTsx1({x:x}){const{hue,normalizeValue,barWidth}=this.__closure;hue.set(normalizeValue(x/barWidth.get())*360);}';
    tango['code'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function HuePickerTsx2(){const{onPanFinalize,runOnJS}=this.__closure;onPanFinalize!=null&&runOnJS(onPanFinalize)();}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function HuePickerTsx3(){const{hslToRgbWorklet,hue,barWidth}=this.__closure;const rgb=hslToRgbWorklet({h:hue.get(),s:1,l:0.5});return{backgroundColor:"rgb("+rgb[0]+", "+rgb[1]+", "+rgb[2]+")",transform:[{translateX:barWidth.get()*hue.get()/360}]};}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 'function HuePickerTsx4(){const{sliderHeight,barHeight,sliderWidth}=this.__closure;const paddingTop=sliderHeight.get()-barHeight.get()>0?(sliderHeight.get()-barHeight.get())/2:0;const paddingLeft=sliderWidth.get()/2;return{paddingTop:paddingTop,paddingBottom:paddingTop,paddingLeft:paddingLeft,paddingRight:paddingLeft};}';
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/color_picker/HuePicker.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: HuePicker
        mike = argFoo;
        output = mike.hue;
        var _closure2_slot0 = output;
        report = mike.onPanFinalize;
        mike = _closure1_slot8;
        tango = undefined;
        verify = mike.bind(tango)();
        foxtrot = _closure1_slot0;
        romeo = _closure1_slot2;
        oscar = 7;
        mike = romeo[oscar];
        zulu = foxtrot.bind(tango)(mike);
        mike = zulu.useSharedValue;
        offset = 0;
        golf = mike.bind(zulu)(offset);
        var _closure2_slot1 = golf;
        mike = romeo[oscar];
        zulu = foxtrot.bind(tango)(mike);
        mike = zulu.useSharedValue;
        kilo = mike.bind(zulu)(offset);
        var _closure2_slot2 = kilo;
        mike = romeo[oscar];
        zulu = foxtrot.bind(tango)(mike);
        mike = zulu.useSharedValue;
        options = mike.bind(zulu)(offset);
        var _closure2_slot3 = options;
        mike = romeo[oscar];
        zulu = foxtrot.bind(tango)(mike);
        mike = zulu.useSharedValue;
        mike = mike.bind(zulu)(offset);
        var _closure2_slot4 = mike;
        zulu = function(argFoo, argBar, argBaz) { // Original name: useHuePickerGesture
            options = argFoo;
            golf = argBar;
            oscar = argBaz;
            var _closure3_slot0 = options;
            var _closure3_slot1 = golf;
            var _closure3_slot2 = oscar;
            entity = {};
            report = _closure1_slot3;
            tango = report.useMemo;
            zulu = new Array(3);
            zulu[0] = options;
            zulu[1] = golf;
            zulu[2] = oscar;
            mike = function() {
                report = function(argFoo) { // Original name: t
                    entity = argFoo;
                    golf = entity.x;
                    tango = _closure3_slot0;
                    zulu = tango.set;
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 5;
                    report = report[entity];
                    entity = undefined;
                    oscar = oscar.bind(entity)(report);
                    report = oscar.normalizeValue;
                    options = _closure3_slot1;
                    mike = options.get;
                    mike = mike.bind(options)();
                    mike = golf / mike;
                    report = report.bind(oscar)(mike);
                    mike = 360;
                    mike = mike * report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = {};
                zulu = _closure3_slot0;
                mike['hue'] = zulu;
                options = _closure1_slot0;
                verify = _closure1_slot2;
                zulu = 5;
                zulu = verify[zulu];
                golf = undefined;
                zulu = options.bind(golf)(zulu);
                zulu = zulu.normalizeValue;
                mike['normalizeValue'] = zulu;
                zulu = _closure3_slot1;
                mike['barWidth'] = zulu;
                report['__closure'] = mike;
                mike = 7671468234964.0;
                report['__workletHash'] = mike;
                mike = _closure1_slot9;
                report['__initData'] = mike;
                mike = 6;
                mike = verify[mike];
                mike = options.bind(golf)(mike);
                zulu = mike.Gesture;
                mike = zulu.Pan;
                zulu = mike.bind(zulu)();
                mike = zulu.onBegin;
                zulu = mike.bind(zulu)(report);
                mike = zulu.onUpdate;
                zulu = mike.bind(zulu)(report);
                mike = zulu.onFinalize;
                entity = function() { // Original name: l
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        zulu = _closure3_slot2;
                        mike = null;
                        if(!(mike != zulu)) { _fun00002_ip = 56; continue _fun00001 }
 13:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 7;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.runOnJS;
                        entity = _closure3_slot2;
                        entity = zulu.bind(tango)(entity);
                        entity = entity.bind(mike)();
 56:
                        entity = undefined;
                        return entity;
                    }
                };
                report = {};
                oscar = _closure3_slot2;
                report['onPanFinalize'] = oscar;
                oscar = 7;
                oscar = verify[oscar];
                oscar = options.bind(golf)(oscar);
                oscar = oscar.runOnJS;
                report['runOnJS'] = oscar;
                entity['__closure'] = report;
                report = 182773971449.0;
                entity['__workletHash'] = report;
                tango = _closure1_slot10;
                entity['__initData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(mike, zulu);
            entity['gesture'] = mike;
            return entity;
        };
        zulu = zulu.bind(tango)(output, mike, report);
        backup = zulu.gesture;
        zulu = romeo[oscar];
        offset = foxtrot.bind(tango)(zulu);
        report = offset.useAnimatedStyle;
        zulu = function() { // Original name: k
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            tango = oscar.hslToRgbWorklet;
            entity = {'h': null, 's': 1, 'l': 0.5};
            report = _closure2_slot0;
            zulu = report.get;
            zulu = zulu.bind(report)();
            entity['h'] = zulu;
            zulu = 1;
            tango = tango.bind(oscar)(entity);
            entity = {};
            oscar = 0;
            sizing = tango[oscar];
            backup = tango[zulu];
            zulu = 2;
            romeo = tango[zulu];
            zulu = global;
            zulu = zulu.HermesInternal;
            golf = zulu.concat;
            output = 'rgb(';
            tango = ', ';
            yankee = ')';
            kilo = tango;
            foxtrot = tango;
            zulu = output[golf](sizing, kilo, backup, foxtrot, romeo, yankee, offset);
            entity['backgroundColor'] = zulu;
            zulu = {};
            tango = _closure2_slot4;
            mike = tango.get;
            tango = mike.bind(tango)();
            mike = report.get;
            mike = mike.bind(report)();
            tango = tango * mike;
            mike = 360;
            mike = tango / mike;
            zulu['translateX'] = mike;
            mike = new Array(1);
            mike[0] = zulu;
            entity['transform'] = mike;
            return entity;
        };
        yankee = {};
        result = 5;
        result = romeo[result];
        result = foxtrot.bind(tango)(result);
        result = result.hslToRgbWorklet;
        yankee['hslToRgbWorklet'] = result;
        yankee['hue'] = output;
        yankee['barWidth'] = mike;
        zulu['__closure'] = yankee;
        yankee = 774575483053.0;
        zulu['__workletHash'] = yankee;
        yankee = _closure1_slot11;
        zulu['__initData'] = yankee;
        offset = report.bind(offset)(zulu);
        output = _closure1_slot3;
        yankee = output.useCallback;
        report = new Array(2);
        report[0] = kilo;
        report[1] = golf;
        zulu = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.layout;
            report = entity.height;
            zulu = entity.width;
            tango = _closure2_slot2;
            mike = tango.set;
            mike = mike.bind(tango)(report);
            mike = _closure2_slot1;
            entity = mike.set;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        yankee = yankee.bind(output)(zulu, report);
        report = output.useCallback;
        zulu = new Array(2);
        zulu[0] = options;
        zulu[1] = mike;
        mike = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.layout;
            report = entity.height;
            zulu = entity.width;
            tango = _closure2_slot3;
            mike = tango.set;
            mike = mike.bind(tango)(report);
            mike = _closure2_slot4;
            entity = mike.set;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        result = report.bind(output)(mike, zulu);
        mike = romeo[oscar];
        zulu = foxtrot.bind(tango)(mike);
        mike = zulu.useAnimatedStyle;
        entity = function() { // Original name: H
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zulu = _closure2_slot2;
                mike = zulu.get;
                zulu = mike.bind(zulu)();
                tango = _closure2_slot3;
                mike = tango.get;
                mike = mike.bind(tango)();
                mike = zulu - mike;
                zulu = 0;
                if(!(mike > zulu)) { _fun00004_ip = 76; continue _fun00003 }
 39:
                tango = _closure2_slot2;
                mike = tango.get;
                tango = mike.bind(tango)();
                report = _closure2_slot3;
                mike = report.get;
                mike = mike.bind(report)();
                tango = tango - mike;
                mike = 2;
                zulu = tango / mike;
 76:
                mike = _closure2_slot1;
                entity = mike.get;
                mike = entity.bind(mike)();
                entity = 2;
                mike = mike / entity;
                entity = {};
                entity['paddingTop'] = zulu;
                entity['paddingBottom'] = zulu;
                entity['paddingLeft'] = mike;
                entity['paddingRight'] = mike;
                return entity;
            }
        };
        report = {};
        report['sliderHeight'] = kilo;
        report['barHeight'] = options;
        report['sliderWidth'] = golf;
        entity['__closure'] = report;
        report = 5225548665736.0;
        entity['__workletHash'] = report;
        report = _closure1_slot12;
        entity['__initData'] = report;
        options = mike.bind(zulu)(entity);
        zulu = _closure1_slot6;
        golf = _closure1_slot1;
        entity = romeo[oscar];
        entity = golf.bind(tango)(entity);
        mike = entity.View;
        entity = {};
        kilo = verify.container;
        report = new Array(2);
        report[0] = kilo;
        report[1] = options;
        entity['style'] = report;
        options = _closure1_slot5;
        report = 6;
        report = romeo[report];
        report = foxtrot.bind(tango)(report);
        foxtrot = report.GestureDetector;
        report = {};
        report['gesture'] = backup;
        backup = 8;
        backup = romeo[backup];
        kilo = golf.bind(tango)(backup);
        backup = {};
        output = _closure1_slot7;
        backup['colors'] = output;
        output = {'x': 0, 'y': 0.5};
        backup['start'] = output;
        output = {'x': 1, 'y': 0.5};
        backup['end'] = output;
        output = verify.colorBar;
        backup['style'] = output;
        output = _closure1_slot4;
        sizing = {};
        sizing['onLayout'] = result;
        result = verify.colorBarInner;
        sizing['style'] = result;
        sizing = options.bind(tango)(output, sizing);
        backup['children'] = sizing;
        backup = options.bind(tango)(kilo, backup);
        report['children'] = backup;
        foxtrot = options.bind(tango)(foxtrot, report);
        report = new Array(2);
        report[0] = foxtrot;
        oscar = romeo[oscar];
        oscar = golf.bind(tango)(oscar);
        golf = oscar.View;
        oscar = {};
        oscar['onLayout'] = yankee;
        yankee = 'box-none';
        oscar['pointerEvents'] = yankee;
        yankee = verify.slider;
        verify = new Array(2);
        verify[0] = yankee;
        verify[1] = offset;
        oscar['style'] = verify;
        oscar = options.bind(tango)(golf, oscar);
        report[1] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();