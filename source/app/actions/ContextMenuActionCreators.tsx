// app/actions/ContextMenuActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: open
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CONTEXT_MENU_OPEN';
        michal['type'] = report;
        report = argFoo;
        michal['contextMenu'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot4 = entity;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: openContextMenu
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            zuuluu = argBaz;
            entity = oscard.stopPropagation;
            entity = entity.bind(oscard)();
            entity = oscard.currentTarget;
            entity = entity.contains;
            golfie = null;
            if(!(golfie != entity)) { _fun00002_ip = 65; continue _fun00001 }
 36:
            report = oscard.currentTarget;
            tangon = report.contains;
            entity = oscard.target;
            entity = tangon.bind(report)(entity);
            if(!entity) { _fun00002_ip = 494; continue _fun00001 }
 65:
            entity = 'pageX';
            report = entity in oscard;
            offset = 0;
            tangon = 0;
            entity = 0;
            if(!report) { _fun00002_ip = 94; continue _fun00001 }
 82:
            tangon = oscard.pageX;
            entity = oscard.pageY;
 94:
            verify = tangon;
            option = entity;
            if(!(offset === tangon)) { _fun00002_ip = 228; continue _fun00001 }
 107:
            verify = tangon;
            option = entity;
            if(!(offset === option)) { _fun00002_ip = 228; continue _fun00001 }
 117:
            tangon = oscard.target;
            entity = golfie == tangon;
            foxtra = undefined;
            yankee = undefined;
            if(entity) { _fun00002_ip = 144; continue _fun00001 }
 134:
            entity = tangon.getBoundingClientRect;
            yankee = entity.bind(tangon)();
 144:
            if(!(golfie == yankee)) { _fun00002_ip = 150; continue _fun00001 }
 148:
            yankee = {};
 150:
            entity = yankee.left;
            tangon = 0;
            if(!(foxtra !== entity)) { _fun00002_ip = 164; continue _fun00001 }
 161:
            tangon = entity;
 164:
            entity = yankee.top;
            report = 0;
            if(!(foxtra !== entity)) { _fun00002_ip = 178; continue _fun00001 }
 175:
            report = entity;
 178:
            romeon = yankee.width;
            entity = 0;
            if(!(foxtra !== romeon)) { _fun00002_ip = 192; continue _fun00001 }
 189:
            entity = romeon;
 192:
            romeon = yankee.height;
            yankee = 2;
            entity = entity / yankee;
            tangon = tangon + entity;
            entity = 0;
            if(!(foxtra !== romeon)) { _fun00002_ip = 217; continue _fun00001 }
 214:
            entity = romeon;
 217:
            entity = entity / yankee;
            option = report + entity;
            verify = tangon;
 228:
            report = {};
            entity = argBar;
            report['render'] = entity;
            entity = argCor;
            report['renderLazy'] = entity;
            entity = oscard.target;
            if(!(golfie == entity)) { _fun00002_ip = 264; continue _fun00001 }
 258:
            entity = oscard.currentTarget;
 264:
            report['target'] = entity;
            entity = global;
            entity = entity.DOMRect;
            tangon = entity.prototype;
            tangon = Object.create(tangon, {constructor: {value: entity}});
            echoed = tangon;
            result = verify;
            output = option;
            sizing = 0;
            kiloes = 0;
            entity = new echoed[entity](result, output, sizing, kiloes, backup);
            entity = entity instanceof Object ? entity : tangon;
            report['rect'] = entity;
            option = {};
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 2;
            verify = verify[tangon];
            tangon = undefined;
            offset = offset.bind(tangon)(verify);
            verify = offset.getCurrentlyInteractingAppContext;
            verify = verify.bind(offset)();
            if(!(golfie == verify)) { _fun00002_ip = 363; continue _fun00001 }
 353:
            offset = _closure1_slot3;
            verify = offset.APP;
 363:
            option['context'] = verify;
            result = option;
            output = zuuluu;
            verify = copyDataProperties(result, output);
            report['config'] = option;
            var _closure2_slot0 = report;
            if(!(golfie != zuuluu)) { _fun00002_ip = 433; continue _fun00001 }
 389:
            zuuluu = zuuluu.enableSpellCheck;
            if(!zuuluu) { _fun00002_ip = 433; continue _fun00001 }
 400:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 3;
            zuuluu = option[zuuluu];
            golfie = golfie.bind(tangon)(zuuluu);
            zuuluu = golfie.isDesktop;
            zuuluu = zuuluu.bind(golfie)();
            if(zuuluu) { _fun00002_ip = 454; continue _fun00001 }
 433:
            zuuluu = oscard.preventDefault;
            zuuluu = zuuluu.bind(oscard)();
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.bind(tangon)(report);
            _fun00002_ip = 494; continue _fun00001;
 454:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            entity = report[entity];
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.addResultListener;
            entity = function() {
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)();
                zuuluu = _closure1_slot4;
                michal = _closure2_slot0;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            var _closure2_slot1 = entity;
 494:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.AppContext;
    var _closure1_slot3 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/ContextMenuActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: closeContextMenu
        entity = undefined;
        return entity;
    };
    zuuluu['closeContextMenu'] = report;
    zuuluu['openContextMenu'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: openContextMenuLazy
        report = _closure1_slot5;
        entity = undefined;
        verify = argFoo;
        golfie = argBaz;
        oscard = argBar;
        offset = undefined;
        option = undefined;
        michal = offset[report](verify, option, golfie, oscard, report);
        return entity;
    };
    zuuluu['openContextMenuLazy'] = michal;
    return entity;
})();