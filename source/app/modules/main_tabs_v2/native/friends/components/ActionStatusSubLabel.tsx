// app/modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx
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
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot3 = option;
    tangon = tangon.jsxs;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function() {
        entity = {};
        michal = {};
        zuuluu = 'hidden';
        michal['overflow'] = zuuluu;
        entity['container'] = michal;
        michal = {};
        zuuluu = 'absolute';
        michal['position'] = zuuluu;
        entity['actionStatus'] = michal;
        return entity;
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: announceActioned
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        tangon = michal.AccessibilityAnnouncer;
        zuuluu = tangon.announce;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    golfie = option.createAnimatedComponent;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Text;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = {};
    golfie = 'function ActionStatusSubLabelTsx1(){const{hasSecondLine,actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const currentlyHasSecondLine=hasSecondLine&&!actioned.get();const lineHeightValue=lineHeight*fontScale;const currentLineHeightValue=currentlyHasSecondLine?lineHeightValue*2:lineHeightValue;return{height:!animate||!actioned.get()?currentLineHeightValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[currentlyHasSecondLine?lineHeightValue*2:lineHeightValue,lineHeightValue]))};}';
    tangon['code'] = golfie;
    var _closure1_slot8 = tangon;
    tangon = {};
    golfie = 'function ActionStatusSubLabelTsx2(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?lineHeight*fontScale:0;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[0,translateYValue]))}]};}';
    tangon['code'] = golfie;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = 'function ActionStatusSubLabelTsx3(){const{actioned,lineHeight,fontScale,animate,withTiming,interpolate}=this.__closure;const translateYValue=actioned.get()?0:-lineHeight*fontScale;return{transform:[{translateY:!animate?translateYValue:withTiming(interpolate(actioned.get()?1:0,[0,1],[translateYValue,0]))}],opacity:!animate?actioned.get()?1:0:withTiming(actioned.get()?1:0)};}';
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'function ActionStatusSubLabelTsx4(){const{actioned}=this.__closure;return actioned.get();}';
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    golfie = 'function ActionStatusSubLabelTsx5(actioned,actionedPrev){const{actionStatusAccessibilityLabel,runOnJS,announceActioned}=this.__closure;const isActioned=actioned&&actionedPrev===false;if(!isActioned||actionStatusAccessibilityLabel==null){return;}runOnJS(announceActioned)(actionStatusAccessibilityLabel);}';
    tangon['code'] = golfie;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/friends/components/ActionStatusSubLabel.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ActionStatusSubLabel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            config = entity.lineHeight;
            tangon = undefined;
            if(!(config === tangon)) { _fun00002_ip = 20; continue _fun00001 }
 17:
            config = 16;
 20:
            var _closure2_slot0 = config;
            kiloes = entity.textVariant;
            if(!(kiloes === tangon)) { _fun00002_ip = 38; continue _fun00001 }
 34:
            kiloes = 'text-xs/medium';
 38:
            ctrled = entity.actioned;
            var _closure2_slot1 = ctrled;
            output = entity.label;
            result = entity.secondaryLabel;
            verify = entity.actionStatus;
            update = entity.actionStatusAccessibilityLabel;
            var _closure2_slot2 = update;
            backup = entity.maxFontSizeMultiplier;
            vacuum = entity.animate;
            var _closure2_slot3 = vacuum;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            entity = null;
            golfie = entity != result;
            _closure2_slot4 = golfie;
            source = _closure1_slot0;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            zuuluu = source.bind(tangon)(entity);
            entity = zuuluu.useFontScale;
            sequen = entity.bind(zuuluu)();
            _closure2_slot5 = sequen;
            entity = _closure1_slot5;
            yankee = entity.bind(tangon)();
            entity = 4;
            zuuluu = report[entity];
            offset = source.bind(tangon)(zuuluu);
            option = offset.useAnimatedStyle;
            zuuluu = function() { // Original name: L
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscard = _closure2_slot4;
                    if(!oscard) { _fun00004_ip = 26; continue _fun00003 }
 10:
                    michal = _closure2_slot1;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    oscard = !entity;
 26:
                    michal = _closure2_slot0;
                    entity = _closure2_slot5;
                    zuuluu = michal * entity;
                    report = zuuluu;
                    if(!oscard) { _fun00004_ip = 51; continue _fun00003 }
 44:
                    entity = 2;
                    report = entity * zuuluu;
 51:
                    entity = {};
                    tangon = _closure2_slot3;
                    michal = report;
                    if(!tangon) { _fun00004_ip = 201; continue _fun00003 }
 66:
                    option = _closure2_slot1;
                    tangon = option.get;
                    tangon = tangon.bind(option)();
                    michal = report;
                    if(!tangon) { _fun00004_ip = 201; continue _fun00003 }
 85:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    tangon = 7;
                    tangon = yankee[tangon];
                    verify = undefined;
                    report = offset.bind(verify)(tangon);
                    tangon = report.withTiming;
                    option = 4;
                    option = yankee[option];
                    verify = offset.bind(verify)(option);
                    option = verify.interpolate;
                    offset = _closure2_slot1;
                    golfie = offset.get;
                    offset = golfie.bind(offset)();
                    golfie = 0;
                    if(!offset) { _fun00004_ip = 154; continue _fun00003 }
 151:
                    golfie = 1;
 154:
                    offset = zuuluu;
                    if(!oscard) { _fun00004_ip = 167; continue _fun00003 }
 160:
                    oscard = 2;
                    offset = oscard * zuuluu;
 167:
                    oscard = new Array(2);
                    oscard[0] = offset;
                    oscard[1] = zuuluu;
                    zuuluu = [0, 1];
                    zuuluu = option.bind(verify)(golfie, zuuluu, oscard);
                    michal = tangon.bind(report)(zuuluu);
 201:
                    entity['height'] = michal;
                    return entity;
                }
            };
            romeon = {};
            romeon['hasSecondLine'] = golfie;
            romeon['actioned'] = ctrled;
            romeon['lineHeight'] = config;
            romeon['fontScale'] = sequen;
            romeon['animate'] = vacuum;
            sizing = 7;
            foxtra = report[sizing];
            foxtra = source.bind(tangon)(foxtra);
            foxtra = foxtra.withTiming;
            romeon['withTiming'] = foxtra;
            foxtra = report[entity];
            foxtra = source.bind(tangon)(foxtra);
            foxtra = foxtra.interpolate;
            romeon['interpolate'] = foxtra;
            zuuluu['__closure'] = romeon;
            romeon = 14210085997091.0;
            zuuluu['__workletHash'] = romeon;
            romeon = _closure1_slot8;
            zuuluu['__initData'] = romeon;
            option = option.bind(offset)(zuuluu);
            zuuluu = report[entity];
            romeon = source.bind(tangon)(zuuluu);
            offset = romeon.useAnimatedStyle;
            zuuluu = function() { // Original name: y
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    tangon = 0;
                    if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 21:
                    michal = _closure2_slot0;
                    entity = _closure2_slot5;
                    tangon = michal * entity;
 33:
                    entity = {};
                    zuuluu = {};
                    report = _closure2_slot3;
                    michal = tangon;
                    if(!report) { _fun00006_ip = 152; continue _fun00005 }
 47:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 7;
                    report = romeon[report];
                    verify = undefined;
                    oscard = yankee.bind(verify)(report);
                    report = oscard.withTiming;
                    option = 4;
                    option = romeon[option];
                    verify = yankee.bind(verify)(option);
                    option = verify.interpolate;
                    yankee = _closure2_slot1;
                    golfie = yankee.get;
                    golfie = golfie.bind(yankee)();
                    offset = 0;
                    if(!golfie) { _fun00006_ip = 116; continue _fun00005 }
 113:
                    offset = 1;
 116:
                    golfie = [0];
                    golfie[1] = tangon;
                    tangon = [0, 1];
                    tangon = option.bind(verify)(offset, tangon, golfie);
                    michal = report.bind(oscard)(tangon);
 152:
                    zuuluu['translateY'] = michal;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            foxtra = {};
            foxtra['actioned'] = ctrled;
            foxtra['lineHeight'] = config;
            foxtra['fontScale'] = sequen;
            foxtra['animate'] = vacuum;
            echoed = report[sizing];
            echoed = source.bind(tangon)(echoed);
            echoed = echoed.withTiming;
            foxtra['withTiming'] = echoed;
            echoed = report[entity];
            echoed = source.bind(tangon)(echoed);
            echoed = echoed.interpolate;
            foxtra['interpolate'] = echoed;
            zuuluu['__closure'] = foxtra;
            foxtra = 1040596522101.0;
            zuuluu['__workletHash'] = foxtra;
            foxtra = _closure1_slot9;
            zuuluu['__initData'] = foxtra;
            echoed = offset.bind(romeon)(zuuluu);
            zuuluu = report[entity];
            romeon = source.bind(tangon)(zuuluu);
            offset = romeon.useAnimatedStyle;
            zuuluu = function() { // Original name: V
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    report = 0;
                    tangon = 0;
                    if(entity) { _fun00008_ip = 38; continue _fun00007 }
 23:
                    entity = _closure2_slot0;
                    michal = -entity;
                    entity = _closure2_slot5;
                    tangon = michal * entity;
 38:
                    entity = {};
                    zuuluu = {};
                    golfie = _closure2_slot3;
                    michal = tangon;
                    if(!golfie) { _fun00008_ip = 155; continue _fun00007 }
 52:
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    golfie = 7;
                    golfie = romeon[golfie];
                    offset = undefined;
                    option = yankee.bind(offset)(golfie);
                    golfie = option.withTiming;
                    verify = 4;
                    verify = romeon[verify];
                    romeon = yankee.bind(offset)(verify);
                    yankee = romeon.interpolate;
                    offset = _closure2_slot1;
                    verify = offset.get;
                    verify = verify.bind(offset)();
                    offset = 0;
                    if(!verify) { _fun00008_ip = 121; continue _fun00007 }
 118:
                    offset = 1;
 121:
                    verify = new Array(2);
                    verify[0] = tangon;
                    verify[1] = report;
                    tangon = [0, 1];
                    tangon = yankee.bind(romeon)(offset, tangon, verify);
                    michal = golfie.bind(option)(tangon);
 155:
                    zuuluu['translateY'] = michal;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity['transform'] = michal;
                    michal = _closure2_slot3;
                    if(michal) { _fun00008_ip = 202; continue _fun00007 }
 179:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    michal = 0;
                    if(!zuuluu) { _fun00008_ip = 200; continue _fun00007 }
 197:
                    michal = 1;
 200:
                    _fun00008_ip = 258; continue _fun00007;
 202:
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = golfie.bind(zuuluu)(tangon);
                    zuuluu = tangon.withTiming;
                    golfie = _closure2_slot1;
                    oscard = golfie.get;
                    oscard = oscard.bind(golfie)();
                    report = 0;
                    if(!oscard) { _fun00008_ip = 253; continue _fun00007 }
 250:
                    report = 1;
 253:
                    michal = zuuluu.bind(tangon)(report);
 258:
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            foxtra = {};
            foxtra['actioned'] = ctrled;
            foxtra['lineHeight'] = config;
            foxtra['fontScale'] = sequen;
            foxtra['animate'] = vacuum;
            sizing = report[sizing];
            sizing = source.bind(tangon)(sizing);
            sizing = sizing.withTiming;
            foxtra['withTiming'] = sizing;
            sizing = report[entity];
            sizing = source.bind(tangon)(sizing);
            sizing = sizing.interpolate;
            foxtra['interpolate'] = sizing;
            zuuluu['__closure'] = foxtra;
            foxtra = 2183035188794.0;
            zuuluu['__workletHash'] = foxtra;
            foxtra = _closure1_slot10;
            zuuluu['__initData'] = foxtra;
            romeon = offset.bind(romeon)(zuuluu);
            zuuluu = report[entity];
            foxtra = source.bind(tangon)(zuuluu);
            offset = foxtra.useAnimatedReaction;
            zuuluu = function() { // Original name: Y
                michal = _closure2_slot1;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = {};
            sizing['actioned'] = ctrled;
            zuuluu['__closure'] = sizing;
            sizing = 9609826744629.0;
            zuuluu['__workletHash'] = sizing;
            sizing = _closure1_slot11;
            zuuluu['__initData'] = sizing;
            michal = function(argFoo, argBar) { // Original name: v
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    if(!entity) { _fun00010_ip = 15; continue _fun00009 }
 6:
                    zuuluu = false;
                    michal = argBar;
                    entity = zuuluu === michal;
 15:
                    if(!entity) { _fun00010_ip = 31; continue _fun00009 }
 18:
                    zuuluu = _closure2_slot2;
                    michal = null;
                    entity = michal != zuuluu;
 31:
                    if(!entity) { _fun00010_ip = 85; continue _fun00009 }
 34:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    tangon = tangon.bind(zuuluu)(michal);
                    michal = tangon.runOnJS;
                    entity = _closure1_slot6;
                    michal = michal.bind(tangon)(entity);
                    entity = _closure2_slot2;
                    entity = michal.bind(zuuluu)(entity);
 85:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = {};
            sizing['actionStatusAccessibilityLabel'] = update;
            update = report[entity];
            update = source.bind(tangon)(update);
            update = update.runOnJS;
            sizing['runOnJS'] = update;
            update = _closure1_slot6;
            sizing['announceActioned'] = update;
            michal['__closure'] = sizing;
            sizing = 14141240445417.0;
            michal['__workletHash'] = sizing;
            sizing = _closure1_slot12;
            michal['__initData'] = sizing;
            michal = offset.bind(foxtra)(zuuluu, michal);
            zuuluu = _closure1_slot4;
            michal = _closure1_slot1;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            offset = yankee.container;
            report = new Array(2);
            report[0] = offset;
            report[1] = option;
            entity['style'] = report;
            sizing = _closure1_slot3;
            option = _closure1_slot7;
            report = {};
            report['variant'] = kiloes;
            report['maxFontSizeMultiplier'] = backup;
            foxtra = 'text-normal';
            report['color'] = foxtra;
            report['style'] = echoed;
            offset = 1;
            report['lineClamp'] = offset;
            report['children'] = output;
            option = sizing.bind(tangon)(option, report);
            report = new Array(3);
            report[0] = option;
            if(!golfie) { _fun00002_ip = 815; continue _fun00001 }
 773:
            output = _closure1_slot3;
            sizing = _closure1_slot7;
            option = {};
            option['variant'] = kiloes;
            option['maxFontSizeMultiplier'] = backup;
            option['style'] = echoed;
            option['color'] = foxtra;
            option['lineClamp'] = offset;
            option['children'] = result;
            golfie = output.bind(tangon)(sizing, option);
 815:
            report[1] = golfie;
            option = _closure1_slot3;
            golfie = _closure1_slot7;
            oscard = {};
            oscard['variant'] = kiloes;
            oscard['maxFontSizeMultiplier'] = backup;
            oscard['color'] = foxtra;
            foxtra = yankee.actionStatus;
            yankee = new Array(2);
            yankee[0] = foxtra;
            yankee[1] = romeon;
            oscard['style'] = yankee;
            oscard['lineClamp'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ActionStatusSubLabel'] = michal;
    return entity;
})();