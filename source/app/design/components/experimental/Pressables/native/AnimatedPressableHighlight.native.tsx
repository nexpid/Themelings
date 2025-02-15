// app/design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun48644: for(var _fun48644_ip = 0; ; ) switch(_fun48644_ip) {
 0:
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
        mike = {};
        entity = true;
        mike['value'] = entity;
        entity = '__esModule';
        entity = options.bind(verify)(zulu, entity, mike);
        entity = 0;
        options = oscar[entity];
        mike = argCorge;
        entity = undefined;
        mike = mike.bind(entity)(options);
        var _closure1_slot3 = mike;
        mike = 1;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        mike = mike.Pressable;
        var _closure1_slot4 = mike;
        mike = 2;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        mike = mike.jsx;
        var _closure1_slot5 = mike;
        mike = 3;
        mike = oscar[mike];
        options = golf.bind(entity)(mike);
        golf = options.createAnimatedComponent;
        mike = 4;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        mike = mike.PressableHighlight;
        mike = golf.bind(options)(mike);
        var _closure1_slot6 = mike;
        mike = 8;
        mike = oscar[mike];
        golf = report.bind(entity)(mike);
        mike = golf.isAndroid;
        mike = mike.bind(golf)();
        if(mike) { _fun48644_ip = 197; continue _fun48644 }
 190:
        mike = function(argFoo) { // Original name: AnimatedPressableHighlightiOS
            zulu = argFoo;
            oscar = zulu.children;
            entity = null;
            mike = Object.create(entity);
            entity = 0;
            mike['children'] = entity;
            foxtrot = {};
            romeo = zulu;
            yankee = mike;
            report = copyDataProperties(foxtrot, romeo, yankee);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 5;
            mike = tango[mike];
            tango = undefined;
            golf = zulu.bind(tango)(mike);
            zulu = golf.useIOSPressEffects;
            mike = 4;
            mike = zulu.bind(golf)(mike);
            verify = mike.onPressIn;
            golf = mike.onPressOut;
            options = mike.pressableStyles;
            zulu = _closure1_slot5;
            mike = _closure1_slot6;
            entity = {};
            offset = 'button';
            entity['accessibilityRole'] = offset;
            entity['onPressIn'] = verify;
            entity['onPressOut'] = golf;
            foxtrot = entity;
            romeo = report;
            golf = copyDataProperties(foxtrot, romeo);
            golf = new Array(2);
            golf[0] = options;
            report = report.style;
            golf[1] = report;
            report = 'style';
            entity[report] = golf;
            report = 'children';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        _fun48644_ip = 202; continue _fun48644;
 197:
        mike = function(argFoo) { // Original name: AnimatedPressableHighlightAndroid
            _fun48645: for(var _fun48645_ip = 0; ; ) switch(_fun48645_ip) {
 0:
                tango = argFoo;
                oscar = tango.children;
                verify = null;
                zulu = Object.create(verify);
                entity = 0;
                zulu['children'] = entity;
                backup = {};
                foxtrot = tango;
                romeo = zulu;
                report = copyDataProperties(backup, foxtrot, romeo);
                var _closure2_slot0 = report;
                golf = _closure1_slot0;
                yankee = _closure1_slot2;
                zulu = 6;
                zulu = yankee[zulu];
                tango = undefined;
                options = golf.bind(tango)(zulu);
                golf = options.useToken;
                offset = _closure1_slot1;
                zulu = 7;
                zulu = yankee[zulu];
                zulu = offset.bind(tango)(zulu);
                zulu = zulu.colors;
                zulu = zulu.ANDROID_RIPPLE;
                offset = golf.bind(options)(zulu);
                var _closure2_slot1 = offset;
                options = _closure1_slot3;
                golf = options.useMemo;
                zulu = new Array(2);
                zulu[0] = offset;
                offset = report.androidRippleConfig;
                yankee = verify == offset;
                verify = undefined;
                if(yankee) { _fun48645_ip = 142; continue _fun48645 }
 136:
                verify = offset.cornerRadius;
 142:
                zulu[1] = verify;
                mike = function() {
                    _fun48646: for(var _fun48646_ip = 0; ; ) switch(_fun48646_ip) {
 0:
                        entity = {};
                        zulu = _closure2_slot1;
                        entity['color'] = zulu;
                        mike = _closure2_slot0;
                        tango = mike.androidRippleConfig;
                        mike = null;
                        report = mike == tango;
                        zulu = undefined;
                        if(report) { _fun48646_ip = 40; continue _fun48646 }
 34:
                        zulu = tango.cornerRadius;
 40:
                        tango = mike != zulu;
                        mike = 12;
                        if(!tango) { _fun48646_ip = 53; continue _fun48646 }
 50:
                        mike = zulu;
 53:
                        entity['cornerRadius'] = mike;
                        return entity;
                    }
                };
                golf = golf.bind(options)(mike, zulu);
                zulu = _closure1_slot5;
                mike = _closure1_slot4;
                entity = {};
                entity['android_ripple'] = golf;
                backup = entity;
                foxtrot = report;
                report = copyDataProperties(backup, foxtrot);
                report = 'children';
                entity[report] = oscar;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
 202:
        tango = 9;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'design/components/experimental/Pressables/native/AnimatedPressableHighlight.native.tsx';
        tango = report.bind(oscar)(tango);
        zulu['AnimatedPressableHighlight'] = mike;
        return entity;
    }
})();