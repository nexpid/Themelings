// app/modules/forums/native/composer/hooks/useBackspaceHandler.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = /((\ud83c[\udde6-\uddff]){2}|([#*0-9]\u20e3)|(\u00a9|\u00ae|[\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])((\ud83c[\udffb-\udfff])?(\ud83e[\uddb0-\uddb3])?(\ufe0f?\u200d([\u2000-\u3300]|[\ud83c-\ud83e][\ud000-\udfff])\ufe0f?)?)*)/g;
    var _closure1_slot1 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/native/composer/hooks/useBackspaceHandler.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useBackspaceHandler
        michal = argFoo;
        golfie = michal.selection;
        var _closure2_slot0 = golfie;
        oscard = michal.draftContent;
        var _closure2_slot1 = oscard;
        report = michal.handleTextChange;
        var _closure2_slot2 = report;
        tangon = _closure1_slot0;
        zuuluu = tangon.useCallback;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                report = entity.start;
                offset = entity.end;
                oscard = 0;
                if(!(oscard !== report)) { _fun00002_ip = 261; continue _fun00001 }
 26:
                entity = null;
                entity = entity == offset;
                golfie = 1;
                tangon = golfie;
                if(entity) { _fun00002_ip = 95; continue _fun00001 }
 41:
                tangon = golfie;
                if(!(report !== offset)) { _fun00002_ip = 95; continue _fun00001 }
 48:
                option = _closure2_slot2;
                verify = _closure2_slot1;
                entity = verify.substring;
                zuuluu = entity.bind(verify)(oscard, report);
                entity = verify.substring;
                entity = entity.bind(verify)(offset);
                zuuluu = zuuluu + entity;
                entity = undefined;
                entity = option.bind(entity)(zuuluu);
                _fun00002_ip = 261; continue _fun00001;
 95:
                if(!(report >= tangon)) { _fun00002_ip = 139; continue _fun00001 }
 99:
                verify = _closure1_slot1;
                option = verify.test;
                yankee = _closure2_slot1;
                offset = yankee.substring;
                entity = report - tangon;
                entity = offset.bind(yankee)(entity, report);
                entity = option.bind(verify)(entity);
                if(entity) { _fun00002_ip = 144; continue _fun00001 }
 139:
                option = tangon + 1;
                _fun00002_ip = 202; continue _fun00001;
 144:
                verify = tangon + golfie;
                entity = tangon;
                if(!(report >= verify)) { _fun00002_ip = 215; continue _fun00001 }
 155:
                offset = _closure1_slot1;
                verify = offset.test;
                romeon = _closure2_slot1;
                yankee = romeon.substring;
                zuuluu = report - tangon;
                zuuluu = zuuluu - golfie;
                zuuluu = yankee.bind(romeon)(zuuluu, report);
                zuuluu = verify.bind(offset)(zuuluu);
                entity = tangon;
                if(!zuuluu) { _fun00002_ip = 215; continue _fun00001 }
 199:
                option = tangon + 1;
 202:
                zuuluu = 8;
                tangon = option;
                entity = golfie;
                if(tangon <= zuuluu) { _fun00002_ip = 95; continue _fun00001 }
 215:
                zuuluu = _closure2_slot2;
                tangon = _closure2_slot1;
                michal = tangon.substring;
                entity = report - entity;
                michal = michal.bind(tangon)(oscard, entity);
                entity = tangon.substring;
                entity = entity.bind(tangon)(report);
                michal = michal + entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 261:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useBackspaceHandler'] = michal;
    return entity;
})();