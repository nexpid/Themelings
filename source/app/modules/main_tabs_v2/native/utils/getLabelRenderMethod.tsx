// app/modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: TabLabel
        _fun118190: for(var _fun118190_ip = 0; ; ) switch(_fun118190_ip) {
 0:
            entity = argFoo;
            offset = entity.focused;
            options = entity.color;
            verify = entity.position;
            report = entity.title;
            mike = _closure1_slot3;
            tango = undefined;
            oscar = mike.bind(tango)();
            zulu = _closure1_slot2;
            mike = _closure1_slot0;
            golf = _closure1_slot1;
            entity = 3;
            entity = golf[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.Text;
            entity = {'variant': 'text-xxs/semibold', 'lineClamp': 1, 'color': null, 'style': null, 'maxFontSizeMultiplier': 2};
            golf = 'interactive-normal';
            if(!offset) { _fun118190_ip = 95; continue _fun118190 }
 89:
            golf = 'interactive-active';
 95:
            entity['color'] = golf;
            golf = 'beside-icon';
            if(!(golf !== verify)) { _fun118190_ip = 119; continue _fun118190 }
 111:
            golf = oscar.titleBelow;
            _fun118190_ip = 125; continue _fun118190;
 119:
            golf = oscar.titleBeside;
 125:
            oscar = new Array(2);
            oscar[0] = golf;
            golf = {};
            golf['color'] = options;
            oscar[1] = golf;
            entity['style'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = -6;
    verify['marginTop'] = offset;
    tango['titleBelow'] = verify;
    verify = {};
    offset = 28;
    verify['marginLeft'] = offset;
    tango['titleBeside'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/utils/getLabelRenderMethod.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getTabLabelRenderMethod
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            tango = _closure1_slot2;
            zulu = _closure1_slot4;
            mike = {};
            oscar = argFoo;
            golf = mike;
            entity = copyDataProperties(golf, oscar);
            report = _closure2_slot0;
            entity = 'title';
            mike[entity] = report;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        return entity;
    };
    zulu['getTabLabelRenderMethod'] = mike;
    return entity;
})();