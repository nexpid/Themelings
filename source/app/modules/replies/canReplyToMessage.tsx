// app/modules/replies/canReplyToMessage.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: hasReplyPermission
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = argBaz;
            entity = zuuluu.isPrivate;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 71; continue _fun00001 }
 19:
            tangon = report.can;
            entity = _closure1_slot7;
            entity = entity.SEND_MESSAGES;
            entity = tangon.bind(report)(entity, zuuluu);
            if(!entity) { _fun00002_ip = 69; continue _fun00001 }
 47:
            tangon = report.can;
            michal = _closure1_slot7;
            michal = michal.READ_MESSAGE_HISTORY;
            entity = tangon.bind(report)(michal, zuuluu);
 69:
            _fun00002_ip = 84; continue _fun00001;
 71:
            michal = zuuluu.isSystemDM;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 84:
            if(!entity) { _fun00002_ip = 142; continue _fun00001 }
 87:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.MessageTypesSets;
            tangon = michal.REPLYABLE;
            zuuluu = tangon.has;
            michal = argBar;
            michal = michal.type;
            entity = zuuluu.bind(tangon)(michal);
 142:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: _canReplyToMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            entity = argBaz;
            report = argGra;
            golfie = tangon.hasFlag;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.EPHEMERAL;
            zuuluu = golfie.bind(tangon)(zuuluu);
            tangon = tangon.state;
            michal = _closure1_slot6;
            michal = michal.SENT;
            tangon = tangon === michal;
            michal = oscard.isArchivedThread;
            michal = michal.bind(oscard)();
            michal = !michal;
            if(michal) { _fun00004_ip = 74; continue _fun00003 }
 71:
            michal = report;
 74:
            if(!entity) { _fun00004_ip = 80; continue _fun00003 }
 77:
            entity = tangon;
 80:
            if(!entity) { _fun00004_ip = 86; continue _fun00003 }
 83:
            entity = !zuuluu;
 86:
            if(!entity) { _fun00004_ip = 95; continue _fun00003 }
 89:
            zuuluu = argCor;
            entity = !zuuluu;
 95:
            if(!entity) { _fun00004_ip = 101; continue _fun00003 }
 98:
            entity = michal;
 101:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MessageFlags;
    var _closure1_slot5 = golfie;
    tangon = tangon.MessageStates;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/replies/canReplyToMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useCanReplyToMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            golfie = argBar;
            var _closure2_slot0 = option;
            var _closure2_slot1 = golfie;
            tangon = _closure1_slot0;
            verify = _closure1_slot1;
            zuuluu = 6;
            zuuluu = verify[zuuluu];
            oscard = undefined;
            report = tangon.bind(oscard)(zuuluu);
            zuuluu = report.useCanUnarchiveThread;
            report = zuuluu.bind(report)(option);
            zuuluu = 7;
            zuuluu = verify[zuuluu];
            offset = tangon.bind(oscard)(zuuluu);
            tangon = offset.useCurrentUserCommunicationDisabled;
            verify = null;
            zuuluu = verify == option;
            yankee = undefined;
            if(zuuluu) { _fun00006_ip = 91; continue _fun00005 }
 81:
            zuuluu = option.getGuildId;
            yankee = zuuluu.bind(option)();
 91:
            romeon = verify != yankee;
            zuuluu = undefined;
            if(!romeon) { _fun00006_ip = 103; continue _fun00005 }
 100:
            zuuluu = yankee;
 103:
            offset = tangon.bind(offset)(zuuluu);
            tangon = _closure1_slot2;
            zuuluu = 2;
            tangon = tangon.bind(oscard)(offset, zuuluu);
            zuuluu = 1;
            tangon = tangon[zuuluu];
            offset = _closure1_slot0;
            yankee = _closure1_slot1;
            zuuluu = 8;
            zuuluu = yankee[zuuluu];
            yankee = offset.bind(oscard)(zuuluu);
            offset = yankee.useStateFromStores;
            romeon = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = romeon;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot0;
                    tangon = null;
                    entity = tangon != entity;
                    if(!entity) { _fun00008_ip = 24; continue _fun00007 }
 16:
                    michal = _closure2_slot1;
                    entity = tangon != michal;
 24:
                    if(!entity) { _fun00008_ip = 55; continue _fun00007 }
 27:
                    oscard = _closure1_slot8;
                    report = _closure2_slot0;
                    tangon = _closure2_slot1;
                    zuuluu = _closure1_slot3;
                    michal = undefined;
                    entity = oscard.bind(michal)(report, tangon, zuuluu);
 55:
                    return entity;
                }
            };
            zuuluu = offset.bind(yankee)(zuuluu, entity);
            entity = verify != option;
            if(!entity) { _fun00006_ip = 189; continue _fun00005 }
 185:
            entity = verify != golfie;
 189:
            if(!entity) { _fun00006_ip = 217; continue _fun00005 }
 192:
            michal = _closure1_slot9;
            result = undefined;
            output = option;
            sizing = golfie;
            kiloes = zuuluu;
            backup = tangon;
            foxtra = report;
            entity = result[michal](output, sizing, kiloes, backup, foxtra, romeon);
 217:
            return entity;
        }
    };
    zuuluu['useCanReplyToMessage'] = tangon;
    michal = function(argFoo, argBar) { // Original name: canReplyToMessage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            michal = 6;
            michal = verify[michal];
            report = undefined;
            zuuluu = option.bind(report)(michal);
            michal = zuuluu.canUnarchiveThread;
            tangon = michal.bind(zuuluu)(golfie);
            zuuluu = _closure1_slot8;
            michal = _closure1_slot3;
            zuuluu = zuuluu.bind(report)(golfie, oscard, michal);
            offset = _closure1_slot4;
            michal = offset.getCurrentUser;
            yankee = michal.bind(offset)();
            michal = 7;
            michal = verify[michal];
            offset = option.bind(report)(michal);
            verify = offset.userCommunicationDisabled;
            michal = null;
            romeon = michal == yankee;
            option = undefined;
            if(romeon) { _fun00010_ip = 104; continue _fun00009 }
 99:
            option = yankee.id;
 104:
            yankee = golfie.getGuildId;
            yankee = yankee.bind(golfie)();
            romeon = michal != yankee;
            michal = undefined;
            if(!romeon) { _fun00010_ip = 126; continue _fun00009 }
 123:
            michal = yankee;
 126:
            verify = verify.bind(offset)(option, michal);
            michal = _closure1_slot9;
            option = _closure1_slot2;
            entity = 2;
            option = option.bind(report)(verify, entity);
            entity = 1;
            backup = option[entity];
            result = undefined;
            output = golfie;
            sizing = oscard;
            kiloes = zuuluu;
            foxtra = tangon;
            entity = result[michal](output, sizing, kiloes, backup, foxtra, romeon);
            return entity;
        }
    };
    zuuluu['canReplyToMessage'] = michal;
    return entity;
})();