// app/modules/chat_input/native/ChatInputAppCommandManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    backup = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    var _closure1_slot5 = option;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = backup.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    offset = report.bind(entity)(tangon);
    verify = offset.createStyles;
    golfie = {};
    yankee = {};
    romeon = 5;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DARK_PRIMARY_800_LIGHT_PRIMARY_300;
    yankee['backgroundColor'] = tangon;
    foxtra = 6;
    tangon = oscard[foxtra];
    tangon = backup.bind(entity)(tangon);
    tangon = tangon.colors;
    tangon = tangon.TEXT_NORMAL;
    yankee['color'] = tangon;
    tangon = oscard[foxtra];
    tangon = backup.bind(entity)(tangon);
    tangon = tangon.radii;
    tangon = tangon.xs;
    yankee['borderRadius'] = tangon;
    tangon = 14;
    yankee['fontSize'] = tangon;
    golfie['commandOption'] = yankee;
    yankee = {};
    kiloes = oscard[romeon];
    kiloes = report.bind(entity)(kiloes);
    kiloes = kiloes.DARK_PRIMARY_800_LIGHT_PRIMARY_300;
    yankee['backgroundColor'] = kiloes;
    kiloes = oscard[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.TEXT_DANGER;
    yankee['color'] = kiloes;
    foxtra = oscard[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.xs;
    yankee['borderRadius'] = foxtra;
    yankee['fontSize'] = tangon;
    golfie['commandErrorOption'] = yankee;
    yankee = {};
    romeon = oscard[romeon];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.DARK_BRAND_260_LIGHT_BRAND_500;
    yankee['color'] = romeon;
    romeon = 'bold';
    yankee['fontWeight'] = romeon;
    golfie['autocomplete'] = yankee;
    golfie = verify.bind(offset)(golfie);
    var _closure1_slot8 = golfie;
    golfie = option.forwardRef;
    michal = function(argFoo, argBar) {
        michal = argFoo;
        yankee = michal.chatInputRef;
        var _closure2_slot0 = yankee;
        offset = michal.chatInputStateRef;
        var _closure2_slot1 = offset;
        romeon = michal.channel;
        var _closure2_slot2 = romeon;
        verify = michal.commandsDisabled;
        var _closure2_slot3 = verify;
        michal = _closure1_slot8;
        report = undefined;
        michal = michal.bind(report)();
        var _closure2_slot4 = michal;
        output = _closure1_slot0;
        result = _closure1_slot3;
        tangon = 7;
        tangon = result[tangon];
        golfie = output.bind(report)(tangon);
        oscard = golfie.useApplicationCommandOptionValueParser;
        tangon = {};
        tangon['channel'] = romeon;
        golfie = oscard.bind(golfie)(tangon);
        var _closure2_slot5 = golfie;
        tangon = 8;
        oscard = result[tangon];
        backup = output.bind(report)(oscard);
        foxtra = backup.useStateFromStores;
        oscard = _closure1_slot7;
        option = new Array(1);
        option[0] = oscard;
        oscard = function() {
            zuuluu = _closure1_slot7;
            michal = zuuluu.getActiveCommand;
            entity = _closure2_slot2;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        foxtra = foxtra.bind(backup)(option, oscard);
        var _closure2_slot6 = foxtra;
        tangon = result[tangon];
        backup = output.bind(report)(tangon);
        option = backup.useStateFromStores;
        tangon = _closure1_slot6;
        oscard = new Array(1);
        oscard[0] = tangon;
        tangon = function() {
            zuuluu = _closure1_slot6;
            michal = zuuluu.getLastResponseNonce;
            entity = _closure2_slot2;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        option = option.bind(backup)(oscard, tangon);
        var _closure2_slot7 = option;
        tangon = _closure1_slot5;
        kiloes = tangon.useRef;
        oscard = 9;
        oscard = result[oscard];
        sizing = output.bind(report)(oscard);
        backup = sizing.getTextBeforeFirstOption;
        oscard = offset.current;
        oscard = oscard.text;
        oscard = backup.bind(sizing)(oscard);
        sizing = oscard.text;
        oscard = sizing.slice;
        backup = 1;
        sizing = oscard.bind(sizing)(backup);
        oscard = sizing.trimEnd;
        oscard = oscard.bind(sizing)();
        oscard = kiloes.bind(tangon)(oscard);
        var _closure2_slot8 = oscard;
        kiloes = tangon.useState;
        oscard = oscard.current;
        sizing = kiloes.bind(tangon)(oscard);
        kiloes = _closure1_slot4;
        oscard = 2;
        oscard = kiloes.bind(report)(sizing, oscard);
        kiloes = 0;
        sizing = oscard[kiloes];
        oscard = oscard[backup];
        var _closure2_slot9 = oscard;
        oscard = _closure1_slot2;
        zuuluu = 10;
        zuuluu = result[zuuluu];
        kiloes = oscard.bind(report)(zuuluu);
        backup = kiloes.useCachedResults;
        oscard = {};
        zuuluu = 'channel';
        oscard['type'] = zuuluu;
        oscard['channel'] = romeon;
        zuuluu = 11;
        zuuluu = result[zuuluu];
        zuuluu = output.bind(report)(zuuluu);
        zuuluu = zuuluu.ApplicationCommandType;
        zuuluu = zuuluu.CHAT;
        zuuluu = backup.bind(kiloes)(oscard, zuuluu, sizing);
        oscard = zuuluu.commands;
        var _closure2_slot10 = oscard;
        zuuluu = tangon.useRef;
        zuuluu = zuuluu.bind(tangon)(report);
        var _closure2_slot11 = zuuluu;
        report = tangon.useCallback;
        zuuluu = new Array(9);
        zuuluu[0] = foxtra;
        zuuluu[1] = romeon;
        zuuluu[2] = yankee;
        zuuluu[3] = offset;
        zuuluu[4] = verify;
        zuuluu[5] = option;
        zuuluu[6] = golfie;
        zuuluu[7] = oscard;
        zuuluu[8] = michal;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot1;
                tangon = entity.current;
                option = tangon.editId;
                oscard = tangon.focused;
                zuuluu = tangon.selectionStart;
                entity = tangon.selectionEnd;
                report = tangon.text;
                tangon = {};
                verify = _closure2_slot6;
                tangon['activeCommand'] = verify;
                verify = _closure2_slot2;
                tangon['channel'] = verify;
                verify = _closure2_slot3;
                tangon['commandsDisabled'] = verify;
                tangon['editId'] = option;
                tangon['focused'] = oscard;
                oscard = _closure2_slot7;
                tangon['lastCommandAutocompleteResponseNonce'] = oscard;
                oscard = _closure2_slot10;
                tangon['queryCommands'] = oscard;
                tangon['selectionStart'] = zuuluu;
                tangon['selectionEnd'] = entity;
                tangon['text'] = report;
                entity = _closure2_slot11;
                zuuluu = entity.current;
                entity = null;
                if(!(entity != zuuluu)) { _fun00002_ip = 160; continue _fun00001 }
 128:
                entity = _closure2_slot11;
                oscard = entity.current;
                zuuluu = oscard.updateApplicationCommandManagerState;
                entity = {};
                entity['newState'] = tangon;
                entity = zuuluu.bind(oscard)(entity);
                _fun00002_ip = 284; continue _fun00001;
 160:
                zuuluu = _closure2_slot11;
                option = _closure1_slot1;
                oscard = _closure1_slot3;
                entity = 12;
                oscard = oscard[entity];
                entity = undefined;
                oscard = option.bind(entity)(oscard);
                entity = {};
                entity['props'] = tangon;
                tangon = _closure2_slot0;
                entity['ref'] = tangon;
                tangon = _closure2_slot5;
                entity['optionValueParser'] = tangon;
                tangon = {};
                option = function() { // Original name: commandOption
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.convertToNativeStyle;
                    entity = _closure2_slot4;
                    entity = entity.commandOption;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                tangon['commandOption'] = option;
                option = function() { // Original name: commandErrorOption
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.convertToNativeStyle;
                    entity = _closure2_slot4;
                    entity = entity.commandErrorOption;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                tangon['commandErrorOption'] = option;
                golfie = function(argFoo) { // Original name: autocomplete
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        report = argFoo;
                        entity = null;
                        if(!(entity != report)) { _fun00004_ip = 78; continue _fun00003 }
 9:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 13;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.convertToNativeStyle;
                        entity = {};
                        tangon = _closure2_slot4;
                        oscard = tangon.autocomplete;
                        golfie = entity;
                        tangon = copyDataProperties(golfie, oscard);
                        tangon = 'color';
                        entity[tangon] = report;
                        entity = michal.bind(zuuluu)(entity);
                        _fun00004_ip = 127; continue _fun00003;
 78:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        michal = 13;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = tangon.convertToNativeStyle;
                        michal = _closure2_slot4;
                        michal = michal.autocomplete;
                        entity = zuuluu.bind(tangon)(michal);
 127:
                        return entity;
                    }
                };
                tangon['autocomplete'] = golfie;
                entity['styles'] = tangon;
                tangon = oscard.prototype;
                tangon = Object.create(tangon, {constructor: {value: oscard}});
                yankee = tangon;
                offset = entity;
                entity = new yankee[oscard](offset, verify);
                entity = entity instanceof Object ? entity : tangon;
                zuuluu['current'] = entity;
 284:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 9;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getTextBeforeFirstOption;
                zuuluu = zuuluu.bind(tangon)(report);
                report = zuuluu.text;
                tangon = report.slice;
                zuuluu = 1;
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = tangon.trimEnd;
                zuuluu = zuuluu.bind(tangon)();
                tangon = _closure2_slot8;
                tangon = tangon.current;
                if(!(tangon !== zuuluu)) { _fun00002_ip = 380; continue _fun00001 }
 361:
                tangon = _closure2_slot9;
                tangon = tangon.bind(entity)(zuuluu);
                michal = _closure2_slot8;
                michal['current'] = zuuluu;
 380:
                return entity;
            }
        };
        michal = report.bind(tangon)(michal, zuuluu);
        var _closure2_slot12 = michal;
        report = tangon.useEffect;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function() {
            michal = _closure2_slot12;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = report.bind(tangon)(michal, zuuluu);
        zuuluu = tangon.useImperativeHandle;
        michal = argBar;
        entity = function() {
            entity = {};
            zuuluu = function() { // Original name: getApplicationCommandManager
                entity = _closure2_slot11;
                entity = entity.current;
                return entity;
            };
            entity['getApplicationCommandManager'] = zuuluu;
            michal = function() { // Original name: updateState
                michal = _closure2_slot12;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            };
            entity['updateState'] = michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = null;
        return entity;
    };
    golfie = golfie.bind(option)(michal);
    michal = 'ChatInputAppCommandManager';
    golfie['displayName'] = michal;
    michal = option.memo;
    michal = michal.bind(option)(golfie);
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/chat_input/native/ChatInputAppCommandManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();