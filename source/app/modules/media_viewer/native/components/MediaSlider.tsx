// app/modules/media_viewer/native/components/MediaSlider.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun85558: for(var _fun85558_ip = 0; ; ) switch(_fun85558_ip) {
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
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = options.bind(verify)(zulu, entity, tango);
        yankee = 0;
        tango = oscar[yankee];
        entity = undefined;
        tango = golf.bind(entity)(tango);
        var _closure1_slot3 = tango;
        tango = 1;
        golf = oscar[tango];
        tango = argCorge;
        tango = tango.bind(entity)(golf);
        var _closure1_slot4 = tango;
        tango = 2;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        golf = tango.View;
        var _closure1_slot5 = golf;
        options = tango.StyleSheet;
        tango = 3;
        golf = oscar[tango];
        golf = report.bind(entity)(golf);
        golf = golf.jsx;
        var _closure1_slot6 = golf;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.jsxs;
        var _closure1_slot7 = tango;
        golf = options.create;
        tango = {};
        backup = 12;
        verify = {'flex': 1, 'marginHorizontal': 12, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
        tango['container'] = verify;
        verify = {};
        offset = 16;
        verify['marginRight'] = offset;
        tango['icon'] = verify;
        verify = {};
        romeo = 4;
        foxtrot = oscar[romeo];
        kilo = report.bind(entity)(foxtrot);
        foxtrot = kilo.isAndroid;
        kilo = foxtrot.bind(kilo)();
        foxtrot = undefined;
        if(!kilo) { _fun85558_ip = 233; continue _fun85558 }
 230:
        foxtrot = backup;
 233:
        verify['lineHeight'] = foxtrot;
        tango['centerText'] = verify;
        verify = {'flex': 1, 'marginHorizontal': 16, 'backgroundColor': 'transparent', 'zIndex': 0};
        tango['downloadProgressTrack'] = verify;
        verify = {'position': 'relative', 'flex': 1, 'marginHorizontal': null, 'justifyContent': 'center'};
        romeo = oscar[romeo];
        foxtrot = report.bind(entity)(romeo);
        romeo = foxtrot.isAndroid;
        romeo = romeo.bind(foxtrot)();
        if(!romeo) { _fun85558_ip = 301; continue _fun85558 }
 299:
        offset = 0;
 301:
        verify['marginHorizontal'] = offset;
        tango['sliderContainer'] = verify;
        verify = {'position': 'relative', 'flex': 1, 'marginHorizontal': 0, 'justifyContent': 'center'};
        tango['progressSliderContainer'] = verify;
        verify = {'position': 'absolute', 'width': '100%', 'backgroundColor': 'transparent', 'zIndex': 0};
        tango['timelineBackgroundSlider'] = verify;
        verify = {'position': 'absolute', 'width': '100%', 'backgroundColor': 'transparent', 'zIndex': 1};
        tango['downloadProgressSlider'] = verify;
        verify = {'position': 'absolute', 'width': '100%', 'zIndex': 2};
        tango['playbackSlider'] = verify;
        tango = golf.bind(options)(tango);
        var _closure1_slot8 = tango;
        tango = 17;
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.fileFinishedImporting;
        tango = 'modules/media_viewer/native/components/MediaSlider.tsx';
        tango = report.bind(oscar)(tango);
        mike = function(argFoo) { // Original name: MediaSlider
            _fun85559: for(var _fun85559_ip = 0; ; ) switch(_fun85559_ip) {
 0:
                mike = argFoo;
                golf = mike.style;
                entity = mike.controls;
                var _closure2_slot0 = entity;
                options = mike.paused;
                var _closure2_slot1 = options;
                zulu = mike.setPaused;
                var _closure2_slot2 = zulu;
                mike = mike.onPlayPress;
                var _closure2_slot3 = mike;
                report = _closure1_slot4;
                zulu = report.useRef;
                mike = false;
                mike = zulu.bind(report)(mike);
                var _closure2_slot4 = mike;
                mike = report.useState;
                sequence = 0;
                mike = mike.bind(report)(sequence);
                offset = _closure1_slot3;
                tango = undefined;
                oscar = 2;
                mike = offset.bind(tango)(mike, oscar);
                record = mike[sequence];
                zulu = 1;
                mike = mike[zulu];
                var _closure2_slot5 = mike;
                mike = report.useState;
                mike = mike.bind(report)(sequence);
                mike = offset.bind(tango)(mike, oscar);
                lima = mike[sequence];
                mike = mike[zulu];
                var _closure2_slot6 = mike;
                mike = report.useState;
                vacuum = 'transparent';
                mike = mike.bind(report)(vacuum);
                mike = offset.bind(tango)(mike, oscar);
                target = mike[sequence];
                mike = mike[zulu];
                var _closure2_slot7 = mike;
                mike = report.useRef;
                verify = mike.bind(report)(sequence);
                var _closure2_slot8 = verify;
                mike = report.useState;
                mike = mike.bind(report)(sequence);
                mike = offset.bind(tango)(mike, oscar);
                echo = mike[sequence];
                mike = mike[zulu];
                var _closure2_slot9 = mike;
                zulu = _closure1_slot1;
                offset = _closure1_slot2;
                mike = 5;
                oscar = offset[mike];
                yankee = zulu.bind(tango)(oscar);
                oscar = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.throttle;
                    mike = function(argFoo) {
                        zulu = _closure2_slot5;
                        entity = undefined;
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    entity = 100;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                control = yankee.bind(tango)(oscar);
                var _closure2_slot10 = control;
                mike = offset[mike];
                zulu = zulu.bind(tango)(mike);
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.throttle;
                    mike = function(argFoo) {
                        _fun85563: for(var _fun85563_ip = 0; ; ) switch(_fun85563_ip) {
 0:
                            report = argFoo;
                            zulu = _closure2_slot6;
                            entity = undefined;
                            zulu = zulu.bind(entity)(report);
                            zulu = _closure2_slot7;
                            mike = 'transparent';
                            tango = 1;
                            if(!(tango === report)) { _fun85563_ip = 96; continue _fun85563 }
 32:
                            report = _closure1_slot1;
                            oscar = _closure1_slot2;
                            tango = 7;
                            tango = oscar[tango];
                            report = report.bind(entity)(tango);
                            tango = '#FFFFFF';
                            oscar = report.bind(entity)(tango);
                            report = oscar.alpha;
                            tango = 0.2;
                            report = report.bind(oscar)(tango);
                            tango = report.hex;
                            mike = tango.bind(report)();
 96:
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        }
                    };
                    entity = 100;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                mike = zulu.bind(tango)(mike);
                var _closure2_slot11 = mike;
                oscar = report.useEffect;
                zulu = new Array(1);
                zulu[0] = control;
                mike = function() {
                    entity = function() {
                        mike = _closure2_slot10;
                        entity = mike.cancel;
                        entity = entity.bind(mike)();
                        entity = undefined;
                        return entity;
                    };
                    return entity;
                };
                mike = oscar.bind(report)(mike, zulu);
                yankee = entity.useSubscribe;
                oscar = function(argFoo, argBar) {
                    tango = _closure2_slot10;
                    entity = undefined;
                    zulu = argFoo;
                    zulu = tango.bind(entity)(zulu);
                    zulu = _closure2_slot8;
                    mike = argBar;
                    zulu['current'] = mike;
                    return entity;
                };
                zulu = function(argFoo) {
                    zulu = _closure2_slot2;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = function(argFoo) {
                    zulu = _closure2_slot11;
                    entity = undefined;
                    mike = argFoo;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike = yankee.bind(entity)(oscar, zulu, mike);
                oscar = report.useCallback;
                zulu = new Array(2);
                zulu[0] = entity;
                zulu[1] = options;
                mike = function() {
                    _fun85569: for(var _fun85569_ip = 0; ; ) switch(_fun85569_ip) {
 0:
                        mike = _closure2_slot1;
                        if(mike) { _fun85569_ip = 37; continue _fun85569 }
 10:
                        tango = _closure2_slot0;
                        zulu = tango.pause;
                        mike = true;
                        zulu = zulu.bind(tango)(mike);
                        entity = _closure2_slot4;
                        entity['current'] = mike;
 37:
                        entity = undefined;
                        return entity;
                    }
                };
                source = oscar.bind(report)(mike, zulu);
                zulu = report.useCallback;
                mike = new Array(1);
                mike[0] = entity;
                entity = function(argFoo) {
                    _fun85570: for(var _fun85570_ip = 0; ; ) switch(_fun85570_ip) {
 0:
                        tango = _closure2_slot0;
                        zulu = tango.seek;
                        mike = argFoo;
                        mike = zulu.bind(tango)(mike);
                        mike = _closure2_slot4;
                        mike = mike.current;
                        if(!mike) { _fun85570_ip = 60; continue _fun85570 }
 33:
                        tango = _closure2_slot0;
                        zulu = tango.pause;
                        mike = false;
                        zulu = zulu.bind(tango)(mike);
                        entity = _closure2_slot4;
                        entity['current'] = mike;
 60:
                        entity = undefined;
                        return entity;
                    }
                };
                update = zulu.bind(report)(entity, mike);
                oscar = _closure1_slot0;
                romeo = 8;
                entity = offset[romeo];
                mike = oscar.bind(tango)(entity);
                entity = mike.getTimeFormat;
                sizing = entity.bind(mike)(record);
                zulu = _closure1_slot7;
                mike = _closure1_slot5;
                entity = {};
                report = _closure1_slot8;
                yankee = report.container;
                report = new Array(2);
                report[0] = yankee;
                report[1] = golf;
                entity['style'] = report;
                golf = _closure1_slot6;
                report = 9;
                report = offset[report];
                report = oscar.bind(tango)(report);
                oscar = report.PressableOpacity;
                report = {};
                offset = _closure1_slot8;
                offset = offset.icon;
                report['style'] = offset;
                offset = 'button';
                report['accessibilityRole'] = offset;
                yankee = _closure1_slot0;
                result = _closure1_slot2;
                offset = 10;
                kilo = result[offset];
                kilo = yankee.bind(tango)(kilo);
                output = kilo.intl;
                kilo = output.string;
                offset = result[offset];
                offset = yankee.bind(tango)(offset);
                yankee = offset.t;
                if(options) { _fun85559_ip = 561; continue _fun85559 }
 548:
                offset = yankee.ZcgDJS;
                offset = kilo.bind(output)(offset);
                _fun85559_ip = 572; continue _fun85559;
 561:
                yankee = yankee.RscU7O;
                offset = kilo.bind(output)(yankee);
 572:
                report['accessibilityLabel'] = offset;
                offset = function() { // Original name: onPress
                    _fun85571: for(var _fun85571_ip = 0; ; ) switch(_fun85571_ip) {
 0:
                        mike = _closure2_slot1;
                        if(!mike) { _fun85571_ip = 20; continue _fun85571 }
 10:
                        zulu = _closure2_slot3;
                        mike = undefined;
                        mike = zulu.bind(mike)();
 20:
                        zulu = _closure2_slot0;
                        mike = zulu.pause;
                        entity = _closure2_slot1;
                        entity = !entity;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    }
                };
                report['onPress'] = offset;
                offset = {'top': 8, 'right': 8, 'bottom': 8, 'left': 8};
                report['hitSlop'] = offset;
                yankee = _closure1_slot6;
                kilo = _closure1_slot0;
                output = _closure1_slot2;
                if(options) { _fun85559_ip = 641; continue _fun85559 }
 621:
                options = 12;
                options = output[options];
                options = kilo.bind(tango)(options);
                offset = options.PauseIcon;
                _fun85559_ip = 659; continue _fun85559;
 641:
                options = 11;
                options = output[options];
                options = kilo.bind(tango)(options);
                offset = options.PlayIcon;
 659:
                options = {'size': 'md', 'color': 'white'};
                options = yankee.bind(tango)(offset, options);
                report['children'] = options;
                oscar = golf.bind(tango)(oscar, report);
                report = new Array(4);
                report[0] = oscar;
                options = _closure1_slot6;
                yankee = _closure1_slot0;
                offset = _closure1_slot2;
                oscar = 13;
                golf = offset[oscar];
                golf = yankee.bind(tango)(golf);
                kilo = golf.Text;
                golf = {'style': null, 'tabularNumbers': true, 'lineClamp': 1, 'color': 'white', 'variant': 'text-xs/medium'};
                output = _closure1_slot8;
                result = output.centerText;
                output = new Array(2);
                output[0] = result;
                result = {};
                result['width'] = echo;
                output[1] = result;
                golf['style'] = output;
                golf['children'] = sizing;
                golf = options.bind(tango)(kilo, golf);
                report[1] = golf;
                sizing = _closure1_slot7;
                kilo = _closure1_slot5;
                golf = {};
                output = _closure1_slot8;
                output = output.sliderContainer;
                golf['style'] = output;
                output = {};
                result = 'none';
                output['pointerEvents'] = result;
                result = _closure1_slot8;
                result = result.progressSliderContainer;
                output['style'] = result;
                config = _closure1_slot1;
                result = 14;
                echo = offset[result];
                context = config.bind(tango)(echo);
                echo = {'style': null, 'value': 1, 'minimumValue': 0, 'maximumValue': 1, 'thumbTintColor': 'transparent'};
                papa = _closure1_slot8;
                papa = papa.timelineBackgroundSlider;
                echo['style'] = papa;
                status = 7;
                papa = offset[status];
                papa = config.bind(tango)(papa);
                sierra = '#FFFFFF';
                whiskey = papa.bind(tango)(sierra);
                papa = whiskey.alpha;
                equality = 0.1;
                whiskey = papa.bind(whiskey)(equality);
                papa = whiskey.hex;
                papa = papa.bind(whiskey)();
                echo['minimumTrackTintColor'] = papa;
                papa = offset[status];
                papa = config.bind(tango)(papa);
                whiskey = papa.bind(tango)(sierra);
                papa = whiskey.alpha;
                whiskey = papa.bind(whiskey)(equality);
                papa = whiskey.hex;
                papa = papa.bind(whiskey)();
                echo['maximumTrackTintColor'] = papa;
                context = options.bind(tango)(context, echo);
                echo = new Array(2);
                echo[0] = context;
                context = offset[result];
                papa = config.bind(tango)(context);
                context = {'style': null, 'value': null, 'minimumValue': 0, 'maximumValue': 1, 'thumbTintColor': 'transparent'};
                whiskey = _closure1_slot8;
                whiskey = whiskey.downloadProgressSlider;
                context['style'] = whiskey;
                context['value'] = lima;
                status = offset[status];
                status = config.bind(tango)(status);
                lima = status.bind(tango)(sierra);
                sierra = lima.alpha;
                status = 0.2;
                sierra = sierra.bind(lima)(status);
                status = sierra.hex;
                status = status.bind(sierra)();
                context['minimumTrackTintColor'] = status;
                context['maximumTrackTintColor'] = target;
                context = options.bind(tango)(papa, context);
                echo[1] = context;
                output['children'] = echo;
                echo = sizing.bind(tango)(kilo, output);
                output = new Array(2);
                output[0] = echo;
                result = offset[result];
                echo = config.bind(tango)(result);
                result = {};
                context = _closure1_slot8;
                context = context.playbackSlider;
                result['style'] = context;
                result['value'] = record;
                record = 15;
                record = offset[record];
                record = config.bind(tango)(record);
                result['thumbImage'] = record;
                result['minimumValue'] = sequence;
                sequence = verify.current;
                result['maximumValue'] = sequence;
                sequence = 16;
                sequence = offset[sequence];
                sequence = config.bind(tango)(sequence);
                sequence = sequence.unsafe_rawColors;
                sequence = sequence.WHITE_500;
                result['minimumTrackTintColor'] = sequence;
                result['maximumTrackTintColor'] = vacuum;
                result['onValueChange'] = control;
                result['onSlidingStart'] = source;
                result['onSlidingComplete'] = update;
                result = options.bind(tango)(echo, result);
                output[1] = result;
                golf['children'] = output;
                golf = sizing.bind(tango)(kilo, golf);
                report[2] = golf;
                oscar = offset[oscar];
                oscar = yankee.bind(tango)(oscar);
                golf = oscar.Text;
                oscar = {'style': null, 'variant': 'text-xs/medium', 'color': 'white', 'tabularNumbers': true, 'lineClamp': 1};
                backup = _closure1_slot8;
                backup = backup.centerText;
                oscar['style'] = backup;
                foxtrot = function(argFoo) { // Original name: onLayout
                    zulu = _closure2_slot9;
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    entity = entity.layout;
                    mike = entity.width;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                oscar['onLayout'] = foxtrot;
                offset = offset[romeo];
                yankee = yankee.bind(tango)(offset);
                offset = yankee.getTimeFormat;
                verify = verify.current;
                verify = offset.bind(yankee)(verify);
                oscar['children'] = verify;
                oscar = options.bind(tango)(golf, oscar);
                report[3] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['default'] = mike;
        return entity;
    }
})();