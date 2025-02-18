// app/modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AutoCompleteResultTypes;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.CHANNEL_SENTINEL;
    var _closure1_slot4 = golfie;
    golfie = tangon.EMOJI_SENTINEL;
    var _closure1_slot5 = golfie;
    tangon = tangon.MENTION_SENTINEL;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: usePressHorizontalAutocompleteItemHandler
        michal = argFoo;
        golfie = michal.draftContent;
        var _closure2_slot0 = golfie;
        oscard = michal.handleTextChange;
        var _closure2_slot1 = oscard;
        report = michal.setSelection;
        var _closure2_slot2 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useCallback;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function(argFoo, argBar, argBaz) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                golfie = argBar;
                report = entity.type;
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.USER;
                if(!(zuuluu !== report)) { _fun00002_ip = 292; continue _fun00001 }
 31:
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.ROLE;
                if(!(zuuluu !== report)) { _fun00002_ip = 258; continue _fun00001 }
 48:
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.CHANNEL;
                if(!(zuuluu !== report)) { _fun00002_ip = 124; continue _fun00001 }
 62:
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.EMOJI;
                verify = '';
                tangon = verify;
                if(!(zuuluu === report)) { _fun00002_ip = 357; continue _fun00001 }
 86:
                option = _closure1_slot5;
                oscard = entity.name;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                report = zuuluu.concat;
                zuuluu = ':';
                tangon = report.bind(verify)(option, oscard, zuuluu);
                _fun00002_ip = 357; continue _fun00001;
 124:
                report = entity.channel;
                zuuluu = report.isThread;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00002_ip = 181; continue _fun00001 }
 142:
                option = _closure1_slot4;
                zuuluu = entity.channel;
                oscard = zuuluu.name;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                report = zuuluu.concat;
                zuuluu = '';
                zuuluu = report.bind(zuuluu)(option, oscard);
                _fun00002_ip = 253; continue _fun00001;
 181:
                option = _closure1_slot0;
                oscard = _closure1_slot1;
                report = 4;
                oscard = oscard[report];
                report = undefined;
                option = option.bind(report)(oscard);
                oscard = option.escapeChannelName;
                report = entity.channel;
                report = report.name;
                verify = oscard.bind(option)(report);
                report = global;
                report = report.HermesInternal;
                option = report.concat;
                oscard = '#"';
                report = '"';
                zuuluu = option.bind(oscard)(verify, report);
 253:
                tangon = zuuluu;
                _fun00002_ip = 357; continue _fun00001;
 258:
                option = _closure1_slot6;
                oscard = entity.name;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                report = zuuluu.concat;
                zuuluu = '';
                tangon = report.bind(zuuluu)(option, oscard);
                _fun00002_ip = 357; continue _fun00001;
 292:
                report = _closure1_slot6;
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = oscard.bind(michal)(zuuluu);
                michal = zuuluu.getUserTag;
                entity = entity.user;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = global;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = '';
                tangon = michal.bind(entity)(report, zuuluu);
 357:
                oscard = _closure2_slot0;
                entity = oscard.substring;
                option = 0;
                report = entity.bind(oscard)(option, golfie);
                zuuluu = new Array(0);
                romeon = zuuluu;
                yankee = report;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = zuuluu.reverse;
                verify = entity.bind(zuuluu)();
                zuuluu = verify.join;
                entity = '';
                verify = zuuluu.bind(verify)(entity);
                zuuluu = verify.search;
                entity = /\s|\r|\n/;
                zuuluu = zuuluu.bind(verify)(entity);
                entity = report.length;
                zuuluu = entity - zuuluu;
                entity = report.substring;
                zuuluu = entity.bind(report)(option, zuuluu);
                report = oscard.substring;
                entity = argBaz;
                entity = entity.length;
                golfie = golfie + entity;
                entity = 2;
                entity = golfie + entity;
                report = report.bind(oscard)(entity);
                oscard = _closure2_slot1;
                golfie = zuuluu + tangon;
                entity = ' ';
                entity = golfie + entity;
                report = entity + report;
                entity = undefined;
                report = oscard.bind(entity)(report);
                zuuluu = zuuluu + tangon;
                tangon = zuuluu.length;
                zuuluu = _closure2_slot2;
                michal = {};
                michal['start'] = tangon;
                michal['end'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['usePressHorizontalAutocompleteItemHandler'] = michal;
    return entity;
})();