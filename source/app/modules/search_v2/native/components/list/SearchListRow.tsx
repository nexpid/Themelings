// app/modules/search_v2/native/components/list/SearchListRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SEARCH_ROW_TAP_STATE_PADDING;
    var _closure1_slot4 = tangon;
    tangon = 3;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot5 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = function(argFoo) {
        entity = {};
        michal = {};
        zuuluu = 16;
        michal['paddingHorizontal'] = zuuluu;
        zuuluu = _closure1_slot4;
        michal['paddingVertical'] = zuuluu;
        entity['pressable'] = michal;
        michal = {'flexDirection': 'row', 'alignItems': 'center'};
        entity['body'] = michal;
        zuuluu = 1;
        michal = {'justifyContent': 'center', 'flex': 1};
        entity['labels'] = michal;
        michal = {};
        oscard = _closure1_slot1;
        report = _closure1_slot2;
        tangon = 5;
        report = report[tangon];
        tangon = undefined;
        tangon = oscard.bind(tangon)(report);
        tangon = tangon.colors;
        tangon = tangon.BACKGROUND_MODIFIER_ACTIVE;
        michal['backgroundColor'] = tangon;
        entity['underlayColor'] = michal;
        michal = {};
        michal['flexShrink'] = zuuluu;
        entity['text'] = michal;
        michal = {};
        zuuluu = 12;
        michal['marginRight'] = zuuluu;
        entity['iconContainer'] = michal;
        michal = {};
        zuuluu = argFoo;
        michal['marginLeft'] = zuuluu;
        entity['extrasContainer'] = michal;
        return entity;
    };
    tangon = option.bind(verify)(tangon);
    var _closure1_slot7 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.containerStyle;
            report = entity.onPress;
            update = entity.label;
            sizing = entity.subLabel;
            kiloes = entity.icon;
            result = entity.iconContainerStyle;
            zuuluu = entity.iconWidth;
            foxtra = entity.trailing;
            offset = entity.extras;
            option = entity.header;
            ctrled = entity.accessible;
            tangon = undefined;
            if(!(ctrled === tangon)) { _fun00002_ip = 73; continue _fun00001 }
 71:
            ctrled = true;
 73:
            source = entity.accessibilityRole;
            if(!(source === tangon)) { _fun00002_ip = 86; continue _fun00001 }
 82:
            source = 'button';
 86:
            echoed = entity.accessibilityLabel;
            output = entity.accessibilityActions;
            verify = entity.onAccessibilityAction;
            backup = entity.bodyStyle;
            michal = _closure1_slot7;
            oscard = null;
            yankee = oscard != zuuluu;
            entity = 0;
            if(!yankee) { _fun00002_ip = 130; continue _fun00001 }
 127:
            entity = zuuluu;
 130:
            yankee = michal.bind(tangon)(entity);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot0;
            vacuum = _closure1_slot2;
            entity = 6;
            entity = vacuum[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.PressableHighlight;
            entity = {};
            entity['accessible'] = ctrled;
            entity['accessibilityRole'] = source;
            entity['accessibilityLabel'] = echoed;
            entity['accessibilityActions'] = output;
            entity['onAccessibilityAction'] = verify;
            output = yankee.pressable;
            verify = new Array(2);
            verify[0] = output;
            verify[1] = romeon;
            entity['style'] = verify;
            entity['onPress'] = report;
            report = 130;
            entity['unstable_pressDelay'] = report;
            report = yankee.underlayColor;
            report = report.backgroundColor;
            entity['underlayColor'] = report;
            report = new Array(3);
            report[0] = option;
            verify = _closure1_slot3;
            option = {};
            output = yankee.body;
            romeon = new Array(2);
            romeon[0] = output;
            romeon[1] = backup;
            option['style'] = romeon;
            backup = _closure1_slot5;
            romeon = {};
            echoed = yankee.iconContainer;
            output = new Array(2);
            output[0] = echoed;
            output[1] = result;
            romeon['style'] = output;
            romeon['children'] = kiloes;
            backup = backup.bind(tangon)(verify, romeon);
            romeon = new Array(3);
            romeon[0] = backup;
            backup = {};
            kiloes = yankee.labels;
            backup['style'] = kiloes;
            result = 'string';
            kiloes = typeof update;
            output = update;
            if(!(result === kiloes)) { _fun00002_ip = 409; continue _fun00001 }
 347:
            echoed = _closure1_slot5;
            result = _closure1_slot0;
            source = _closure1_slot2;
            kiloes = 7;
            kiloes = source[kiloes];
            kiloes = result.bind(tangon)(kiloes);
            result = kiloes.Text;
            kiloes = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            source = yankee.text;
            kiloes['style'] = source;
            kiloes['children'] = update;
            output = echoed.bind(tangon)(result, kiloes);
 409:
            kiloes = new Array(2);
            kiloes[0] = output;
            kiloes[1] = sizing;
            backup['children'] = kiloes;
            backup = zuuluu.bind(tangon)(verify, backup);
            romeon[1] = backup;
            romeon[2] = foxtra;
            option['children'] = romeon;
            option = zuuluu.bind(tangon)(verify, option);
            report[1] = option;
            oscard = oscard != offset;
            if(!oscard) { _fun00002_ip = 498; continue _fun00001 }
 460:
            verify = _closure1_slot5;
            option = _closure1_slot3;
            golfie = {};
            romeon = yankee.extrasContainer;
            yankee = new Array(1);
            yankee[0] = romeon;
            golfie['style'] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 498:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/SearchListRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['SearchListRow'] = michal;
    return entity;
})();