// app/modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx
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
    tango = 1;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot3 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function() {
        entity = {};
        mike = {};
        zulu = 'hidden';
        mike['overflow'] = zulu;
        entity['container'] = mike;
        mike = {};
        zulu = 'absolute';
        mike['position'] = zulu;
        entity['actionStatus'] = mike;
        return entity;
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot5 = tango;
    tango = function(argFoo) { // Original name: announceActioned
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        tango = mike.AccessibilityAnnouncer;
        zulu = tango.announce;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    golf = options.createAnimatedComponent;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Text;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = {};
    golf = 'function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}';
    tango['code'] = golf;
    var _closure1_slot8 = tango;
    tango = {};
    golf = 'function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}';
    tango['code'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 'function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}';
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ActionStatusSubLabel
        _fun116556: for(var _fun116556_ip = 0; ; ) switch(_fun116556_ip) {
 0:
            entity = argFoo;
            config = entity.lineHeight;
            tango = undefined;
            if(!(config === tango)) { _fun116556_ip = 20; continue _fun116556 }
 17:
            config = 16;
 20:
            var _closure2_slot0 = config;
            kilo = entity.textVariant;
            if(!(kilo === tango)) { _fun116556_ip = 38; continue _fun116556 }
 34:
            kilo = 'text-xs/medium';
 38:
            control = entity.actioned;
            var _closure2_slot1 = control;
            output = entity.label;
            result = entity.secondaryLabel;
            verify = entity.actionStatus;
            update = entity.actionStatusAccessibilityLabel;
            var _closure2_slot2 = update;
            backup = entity.maxFontSizeMultiplier;
            vacuum = entity.animate;
            var _closure2_slot3 = vacuum;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            entity = null;
            golf = entity != result;
            _closure2_slot4 = golf;
            source = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            zulu = source.bind(tango)(entity);
            entity = zulu.useFontScale;
            sequence = entity.bind(zulu)();
            _closure2_slot5 = sequence;
            entity = _closure1_slot5;
            yankee = entity.bind(tango)();
            entity = 4;
            zulu = report[entity];
            offset = source.bind(tango)(zulu);
            options = offset.useAnimatedStyle;
            zulu = function() { // Original name: L
                _fun116557: for(var _fun116557_ip = 0; ; ) switch(_fun116557_ip) {
 0:
                    oscar = _closure2_slot4;
                    if(!oscar) { _fun116557_ip = 26; continue _fun116557 }
 10:
                    mike = _closure2_slot1;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    oscar = !entity;
 26:
                    mike = _closure2_slot0;
                    entity = _closure2_slot5;
                    zulu = mike * entity;
                    report = zulu;
                    if(!oscar) { _fun116557_ip = 51; continue _fun116557 }
 44:
                    entity = 2;
                    report = entity * zulu;
 51:
                    entity = {};
                    tango = _closure2_slot3;
                    mike = report;
                    if(!tango) { _fun116557_ip = 201; continue _fun116557 }
 66:
                    options = _closure2_slot1;
                    tango = options.get;
                    tango = tango.bind(options)();
                    mike = report;
                    if(!tango) { _fun116557_ip = 201; continue _fun116557 }
 85:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    tango = 7;
                    tango = yankee[tango];
                    verify = undefined;
                    report = offset.bind(verify)(tango);
                    tango = report.withTiming;
                    options = 4;
                    options = yankee[options];
                    verify = offset.bind(verify)(options);
                    options = verify.interpolate;
                    offset = _closure2_slot1;
                    golf = offset.get;
                    offset = golf.bind(offset)();
                    golf = 0;
                    if(!offset) { _fun116557_ip = 154; continue _fun116557 }
 151:
                    golf = 1;
 154:
                    offset = zulu;
                    if(!oscar) { _fun116557_ip = 167; continue _fun116557 }
 160:
                    oscar = 2;
                    offset = oscar * zulu;
 167:
                    oscar = new Array(2);
                    oscar[0] = offset;
                    oscar[1] = zulu;
                    zulu = [0, 1];
                    zulu = options.bind(verify)(golf, zulu, oscar);
                    mike = tango.bind(report)(zulu);
 201:
                    entity['height'] = mike;
                    return entity;
                }
            };
            romeo = {};
            romeo['hasSecondLine'] = golf;
            romeo['actioned'] = control;
            romeo['lineHeight'] = config;
            romeo['fontScale'] = sequence;
            romeo['animate'] = vacuum;
            sizing = 7;
            foxtrot = report[sizing];
            foxtrot = source.bind(tango)(foxtrot);
            foxtrot = foxtrot.withTiming;
            romeo['withTiming'] = foxtrot;
            foxtrot = report[entity];
            foxtrot = source.bind(tango)(foxtrot);
            foxtrot = foxtrot.interpolate;
            romeo['interpolate'] = foxtrot;
            zulu['__closure'] = romeo;
            romeo = 14210085997091.0;
            zulu['__workletHash'] = romeo;
            romeo = _closure1_slot8;
            zulu['__initData'] = romeo;
            options = options.bind(offset)(zulu);
            zulu = report[entity];
            romeo = source.bind(tango)(zulu);
            offset = romeo.useAnimatedStyle;
            zulu = function() { // Original name: y
                _fun116558: for(var _fun116558_ip = 0; ; ) switch(_fun116558_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    tango = 0;
                    if(!entity) { _fun116558_ip = 33; continue _fun116558 }
 21:
                    mike = _closure2_slot0;
                    entity = _closure2_slot5;
                    tango = mike * entity;
 33:
                    entity = {};
                    zulu = {};
                    report = _closure2_slot3;
                    mike = tango;
                    if(!report) { _fun116558_ip = 152; continue _fun116558 }
 47:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    report = 7;
                    report = romeo[report];
                    verify = undefined;
                    oscar = yankee.bind(verify)(report);
                    report = oscar.withTiming;
                    options = 4;
                    options = romeo[options];
                    verify = yankee.bind(verify)(options);
                    options = verify.interpolate;
                    yankee = _closure2_slot1;
                    golf = yankee.get;
                    golf = golf.bind(yankee)();
                    offset = 0;
                    if(!golf) { _fun116558_ip = 116; continue _fun116558 }
 113:
                    offset = 1;
 116:
                    golf = [0];
                    golf[1] = tango;
                    tango = [0, 1];
                    tango = options.bind(verify)(offset, tango, golf);
                    mike = report.bind(oscar)(tango);
 152:
                    zulu['translateY'] = mike;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity['transform'] = mike;
                    return entity;
                }
            };
            foxtrot = {};
            foxtrot['actioned'] = control;
            foxtrot['lineHeight'] = config;
            foxtrot['fontScale'] = sequence;
            foxtrot['animate'] = vacuum;
            echo = report[sizing];
            echo = source.bind(tango)(echo);
            echo = echo.withTiming;
            foxtrot['withTiming'] = echo;
            echo = report[entity];
            echo = source.bind(tango)(echo);
            echo = echo.interpolate;
            foxtrot['interpolate'] = echo;
            zulu['__closure'] = foxtrot;
            foxtrot = 1040596522101.0;
            zulu['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot9;
            zulu['__initData'] = foxtrot;
            echo = offset.bind(romeo)(zulu);
            zulu = report[entity];
            romeo = source.bind(tango)(zulu);
            offset = romeo.useAnimatedStyle;
            zulu = function() { // Original name: V
                _fun116559: for(var _fun116559_ip = 0; ; ) switch(_fun116559_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    report = 0;
                    tango = 0;
                    if(entity) { _fun116559_ip = 38; continue _fun116559 }
 23:
                    entity = _closure2_slot0;
                    mike = -entity;
                    entity = _closure2_slot5;
                    tango = mike * entity;
 38:
                    entity = {};
                    zulu = {};
                    golf = _closure2_slot3;
                    mike = tango;
                    if(!golf) { _fun116559_ip = 155; continue _fun116559 }
 52:
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    golf = 7;
                    golf = romeo[golf];
                    offset = undefined;
                    options = yankee.bind(offset)(golf);
                    golf = options.withTiming;
                    verify = 4;
                    verify = romeo[verify];
                    romeo = yankee.bind(offset)(verify);
                    yankee = romeo.interpolate;
                    offset = _closure2_slot1;
                    verify = offset.get;
                    verify = verify.bind(offset)();
                    offset = 0;
                    if(!verify) { _fun116559_ip = 121; continue _fun116559 }
 118:
                    offset = 1;
 121:
                    verify = new Array(2);
                    verify[0] = tango;
                    verify[1] = report;
                    tango = [0, 1];
                    tango = yankee.bind(romeo)(offset, tango, verify);
                    mike = golf.bind(options)(tango);
 155:
                    zulu['translateY'] = mike;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity['transform'] = mike;
                    mike = _closure2_slot3;
                    if(mike) { _fun116559_ip = 202; continue _fun116559 }
 179:
                    zulu = _closure2_slot1;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    mike = 0;
                    if(!zulu) { _fun116559_ip = 200; continue _fun116559 }
 197:
                    mike = 1;
 200:
                    _fun116559_ip = 258; continue _fun116559;
 202:
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 7;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = golf.bind(zulu)(tango);
                    zulu = tango.withTiming;
                    golf = _closure2_slot1;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)();
                    report = 0;
                    if(!oscar) { _fun116559_ip = 253; continue _fun116559 }
 250:
                    report = 1;
 253:
                    mike = zulu.bind(tango)(report);
 258:
                    entity['opacity'] = mike;
                    return entity;
                }
            };
            foxtrot = {};
            foxtrot['actioned'] = control;
            foxtrot['lineHeight'] = config;
            foxtrot['fontScale'] = sequence;
            foxtrot['animate'] = vacuum;
            sizing = report[sizing];
            sizing = source.bind(tango)(sizing);
            sizing = sizing.withTiming;
            foxtrot['withTiming'] = sizing;
            sizing = report[entity];
            sizing = source.bind(tango)(sizing);
            sizing = sizing.interpolate;
            foxtrot['interpolate'] = sizing;
            zulu['__closure'] = foxtrot;
            foxtrot = 2183035188794.0;
            zulu['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot10;
            zulu['__initData'] = foxtrot;
            romeo = offset.bind(romeo)(zulu);
            zulu = report[entity];
            foxtrot = source.bind(tango)(zulu);
            offset = foxtrot.useAnimatedReaction;
            zulu = function() { // Original name: Y
                mike = _closure2_slot1;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            sizing = {};
            sizing['actioned'] = control;
            zulu['__closure'] = sizing;
            sizing = 9609826744629.0;
            zulu['__workletHash'] = sizing;
            sizing = _closure1_slot11;
            zulu['__initData'] = sizing;
            mike = function(argFoo, argBar) { // Original name: v
                _fun116561: for(var _fun116561_ip = 0; ; ) switch(_fun116561_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun116561_ip = 15; continue _fun116561 }
 6:
                    zulu = false;
                    mike = argBar;
                    entity = zulu === mike;
 15:
                    if(!entity) { _fun116561_ip = 31; continue _fun116561 }
 18:
                    zulu = _closure2_slot2;
                    mike = null;
                    entity = mike != zulu;
 31:
                    if(!entity) { _fun116561_ip = 85; continue _fun116561 }
 34:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    mike = zulu[mike];
                    zulu = undefined;
                    tango = tango.bind(zulu)(mike);
                    mike = tango.runOnJS;
                    entity = _closure1_slot6;
                    mike = mike.bind(tango)(entity);
                    entity = _closure2_slot2;
                    entity = mike.bind(zulu)(entity);
 85:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = {};
            sizing['actionStatusAccessibilityLabel'] = update;
            update = report[entity];
            update = source.bind(tango)(update);
            update = update.runOnJS;
            sizing['runOnJS'] = update;
            update = _closure1_slot6;
            sizing['announceActioned'] = update;
            mike['__closure'] = sizing;
            sizing = 14141240445417.0;
            mike['__workletHash'] = sizing;
            sizing = _closure1_slot12;
            mike['__initData'] = sizing;
            mike = offset.bind(foxtrot)(zulu, mike);
            zulu = _closure1_slot4;
            mike = _closure1_slot1;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            offset = yankee.container;
            report = new Array(2);
            report[0] = offset;
            report[1] = options;
            entity['style'] = report;
            sizing = _closure1_slot3;
            options = _closure1_slot7;
            report = {};
            report['variant'] = kilo;
            report['maxFontSizeMultiplier'] = backup;
            foxtrot = 'text-normal';
            report['color'] = foxtrot;
            report['style'] = echo;
            offset = 1;
            report['lineClamp'] = offset;
            report['children'] = output;
            options = sizing.bind(tango)(options, report);
            report = new Array(3);
            report[0] = options;
            if(!golf) { _fun116556_ip = 815; continue _fun116556 }
 773:
            output = _closure1_slot3;
            sizing = _closure1_slot7;
            options = {};
            options['variant'] = kilo;
            options['maxFontSizeMultiplier'] = backup;
            options['style'] = echo;
            options['color'] = foxtrot;
            options['lineClamp'] = offset;
            options['children'] = result;
            golf = output.bind(tango)(sizing, options);
 815:
            report[1] = golf;
            options = _closure1_slot3;
            golf = _closure1_slot7;
            oscar = {};
            oscar['variant'] = kilo;
            oscar['maxFontSizeMultiplier'] = backup;
            oscar['color'] = foxtrot;
            foxtrot = yankee.actionStatus;
            yankee = new Array(2);
            yankee[0] = foxtrot;
            yankee[1] = romeo;
            oscar['style'] = yankee;
            oscar['lineClamp'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['ActionStatusSubLabel'] = mike;
    return entity;
})();