// app/modules/user_profile/native/UserProfileAboutMeCardCommand.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
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
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 4;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.MENTION_FOREGROUND;
    offset['color'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.MENTION_BACKGROUND;
    offset['backgroundColor'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_12;
    offset['marginEnd'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_12;
    offset['marginBottom'] = yankee;
    tangon['commandClickable'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot5 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: UserProfileAboutMeCardCommand
        entity = argFoo;
        michal = entity.application;
        var _closure2_slot0 = michal;
        report = entity.command;
        var _closure2_slot1 = report;
        entity = entity.channel;
        var _closure2_slot2 = entity;
        michal = _closure1_slot5;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        zuuluu = _closure1_slot4;
        michal = _closure1_slot0;
        option = _closure1_slot2;
        entity = 5;
        entity = option[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.Text;
        entity = {};
        option = 'text-md/bold';
        entity['variant'] = option;
        option = function() { // Original name: onPress
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 6;
                michal = tangon[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                michal = oscard.getBestActiveInput;
                offset = michal.bind(oscard)();
                var _closure3_slot0 = offset;
                michal = 7;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.handleTapCommandMention;
                michal = {};
                golfie = _closure2_slot2;
                golfie = golfie.id;
                michal['channelId'] = golfie;
                golfie = null;
                verify = golfie == offset;
                option = undefined;
                if(verify) { _fun00002_ip = 98; continue _fun00001 }
 88:
                verify = offset.getText;
                option = verify.bind(offset)();
 98:
                verify = golfie != option;
                golfie = '';
                if(!verify) { _fun00002_ip = 112; continue _fun00001 }
 109:
                golfie = option;
 112:
                michal['currentText'] = golfie;
                oscard = _closure2_slot1;
                golfie = oscard.id;
                michal['commandId'] = golfie;
                oscard = oscard.displayName;
                michal['commandName'] = oscard;
                oscard = function(argFoo) { // Original name: onOpenCustomKeyboard
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        entity = null;
                        zuuluu = entity == zuuluu;
                        entity = undefined;
                        if(zuuluu) { _fun00004_ip = 36; continue _fun00003 }
 18:
                        tangon = _closure3_slot0;
                        zuuluu = tangon.openCustomKeyboard;
                        michal = argFoo;
                        entity = zuuluu.bind(tangon)(michal);
 36:
                        return entity;
                    }
                };
                michal['onOpenCustomKeyboard'] = oscard;
                report = function() { // Original name: onSetCommand
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        verify = zuuluu.bind(entity)(michal);
                        option = verify.track;
                        michal = _closure1_slot3;
                        zuuluu = michal.POPULAR_APPLICATION_COMMAND_CLICKED;
                        michal = {};
                        tangon = _closure2_slot0;
                        oscard = null;
                        offset = oscard == tangon;
                        tangon = undefined;
                        if(offset) { _fun00006_ip = 69; continue _fun00005 }
 60:
                        offset = _closure2_slot0;
                        tangon = offset.id;
 69:
                        michal['application_id'] = tangon;
                        tangon = _closure2_slot1;
                        tangon = tangon.id;
                        michal['command_id'] = tangon;
                        romeon = _closure2_slot2;
                        tangon = romeon.getGuildId;
                        tangon = tangon.bind(romeon)();
                        michal['guild_id'] = tangon;
                        yankee = _closure1_slot0;
                        tangon = _closure1_slot2;
                        offset = 9;
                        offset = tangon[offset];
                        yankee = yankee.bind(entity)(offset);
                        offset = yankee.collectChannelAnalyticsMetadata;
                        foxtra = offset.bind(yankee)(romeon);
                        backup = michal;
                        offset = copyDataProperties(backup, foxtra);
                        michal = option.bind(verify)(zuuluu, michal);
                        zuuluu = _closure1_slot1;
                        michal = 10;
                        michal = tangon[michal];
                        option = zuuluu.bind(entity)(michal);
                        michal = option.hideActionSheet;
                        michal = michal.bind(option)();
                        michal = 11;
                        michal = tangon[michal];
                        michal = zuuluu.bind(entity)(michal);
                        michal = michal.bind(entity)();
                        michal = _closure3_slot0;
                        if(!(oscard != michal)) { _fun00006_ip = 217; continue _fun00005 }
 203:
                        tangon = _closure3_slot0;
                        michal = tangon.openSystemKeyboard;
                        michal = michal.bind(tangon)();
 217:
                        michal = _closure3_slot0;
                        michal = oscard == michal;
                        tangon = undefined;
                        if(michal) { _fun00006_ip = 251; continue _fun00005 }
 230:
                        option = _closure3_slot0;
                        zuuluu = option.getApplicationCommandManager;
                        zuuluu = zuuluu.bind(option)();
                        michal = oscard == zuuluu;
                        tangon = zuuluu;
 251:
                        if(michal) { _fun00006_ip = 380; continue _fun00005 }
 257:
                        zuuluu = tangon.setCommand;
                        michal = {};
                        option = _closure2_slot2;
                        option = option.id;
                        michal['channelId'] = option;
                        option = _closure2_slot1;
                        michal['command'] = option;
                        option = _closure2_slot0;
                        option = oscard != option;
                        oscard = null;
                        if(!option) { _fun00006_ip = 335; continue _fun00005 }
 300:
                        verify = _closure1_slot0;
                        offset = _closure1_slot2;
                        option = 12;
                        option = offset[option];
                        verify = verify.bind(entity)(option);
                        option = verify.getApplicationCommandSection;
                        golfie = _closure2_slot0;
                        oscard = option.bind(verify)(golfie);
 335:
                        michal['section'] = oscard;
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        report = 13;
                        report = golfie[report];
                        report = oscard.bind(entity)(report);
                        report = report.ApplicationCommandTriggerLocations;
                        report = report.POPULAR_COMMANDS;
                        michal['location'] = report;
                        michal = zuuluu.bind(tangon)(michal);
 380:
                        return entity;
                    }
                };
                michal['onSetCommand'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        entity['onPress'] = option;
        golfie = function() { // Original name: onLongPress
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.handleLongPressCommandMention;
            entity = _closure2_slot1;
            michal = entity.displayName;
            entity = entity.id;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['onLongPress'] = golfie;
        oscard = oscard.commandClickable;
        entity['style'] = oscard;
        oscard = report.displayName;
        report = ['/'];
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileAboutMeCardCommand.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();