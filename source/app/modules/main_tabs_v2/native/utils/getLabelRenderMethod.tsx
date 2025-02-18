// app/modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: TabLabel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.focused;
            option = entity.color;
            verify = entity.position;
            report = entity.title;
            michal = _closure1_slot3;
            tangon = undefined;
            oscard = michal.bind(tangon)();
            zuuluu = _closure1_slot2;
            michal = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 3;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Text;
            entity = {'variant': 'text-xxs/semibold', 'lineClamp': 1, 'color': null, 'style': null, 'maxFontSizeMultiplier': 2};
            golfie = 'interactive-normal';
            if(!offset) { _fun00002_ip = 95; continue _fun00001 }
 89:
            golfie = 'interactive-active';
 95:
            entity['color'] = golfie;
            golfie = 'beside-icon';
            if(!(golfie !== verify)) { _fun00002_ip = 119; continue _fun00001 }
 111:
            golfie = oscard.titleBelow;
            _fun00002_ip = 125; continue _fun00001;
 119:
            golfie = oscard.titleBeside;
 125:
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = {};
            golfie['color'] = option;
            oscard[1] = golfie;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    offset = -6;
    verify['marginTop'] = offset;
    tangon['titleBelow'] = verify;
    verify = {};
    offset = 28;
    verify['marginLeft'] = offset;
    tangon['titleBeside'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getTabLabelRenderMethod
        michal = argFoo;
        var _closure2_slot0 = michal;
        entity = function(argFoo) {
            tangon = _closure1_slot2;
            zuuluu = _closure1_slot4;
            michal = {};
            oscard = argFoo;
            golfie = michal;
            entity = copyDataProperties(golfie, oscard);
            report = _closure2_slot0;
            entity = 'title';
            michal[entity] = report;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        return entity;
    };
    zuuluu['getTabLabelRenderMethod'] = michal;
    return entity;
})();