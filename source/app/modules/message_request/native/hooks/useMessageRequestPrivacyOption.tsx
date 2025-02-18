// app/modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx
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
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = function(argFoo) { // Original name: MessageRequestRestrictedGuildPrivacyOption
        entity = argFoo;
        zuuluu = entity.guild;
        verify = zuuluu.id;
        var _closure2_slot0 = verify;
        yankee = _closure1_slot0;
        romeon = _closure1_slot2;
        report = 2;
        oscard = romeon[report];
        tangon = undefined;
        oscard = yankee.bind(tangon)(oscard);
        golfie = oscard.MessageRequestRestrictedGuildIds;
        oscard = golfie.useSetting;
        golfie = oscard.bind(golfie)();
        oscard = golfie.includes;
        golfie = oscard.bind(golfie)(verify);
        report = romeon[report];
        report = yankee.bind(tangon)(report);
        oscard = report.RestrictedGuildIds;
        report = oscard.useSetting;
        oscard = report.bind(oscard)();
        report = oscard.includes;
        zuuluu = zuuluu.id;
        report = report.bind(oscard)(zuuluu);
        option = _closure1_slot3;
        oscard = option.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = verify;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 3;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.getSanitizedMessageRequestRestrictedGuilds;
                oscard = zuuluu.bind(tangon)();
                zuuluu = argFoo;
                if(zuuluu) { _fun00002_ip = 60; continue _fun00001 }
 41:
                tangon = oscard.add;
                zuuluu = _closure2_slot0;
                zuuluu = tangon.bind(oscard)(zuuluu);
                _fun00002_ip = 77; continue _fun00001;
 60:
                tangon = oscard.delete;
                zuuluu = _closure2_slot0;
                zuuluu = tangon.bind(oscard)(zuuluu);
 77:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 2;
                michal = tangon[michal];
                michal = zuuluu.bind(entity)(michal);
                tangon = michal.MessageRequestRestrictedGuildIds;
                zuuluu = tangon.updateSetting;
                michal = global;
                report = michal.Array;
                michal = report.from;
                michal = michal.bind(report)(oscard);
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        oscard = oscard.bind(option)(michal, zuuluu);
        zuuluu = _closure1_slot4;
        entity = 4;
        entity = romeon[entity];
        entity = yankee.bind(tangon)(entity);
        michal = entity.ActionSheetSwitchRow;
        entity = {};
        option = 5;
        verify = romeon[option];
        verify = yankee.bind(tangon)(verify);
        foxtra = verify.intl;
        offset = foxtra.string;
        verify = romeon[option];
        verify = yankee.bind(tangon)(verify);
        verify = verify.t;
        verify = verify.7UgSGB;
        verify = offset.bind(foxtra)(verify);
        entity['label'] = verify;
        verify = romeon[option];
        verify = yankee.bind(tangon)(verify);
        offset = verify.intl;
        verify = offset.string;
        option = romeon[option];
        option = yankee.bind(tangon)(option);
        option = option.t;
        option = option.INRaYW;
        option = verify.bind(offset)(option);
        entity['subLabel'] = option;
        golfie = !golfie;
        entity['value'] = golfie;
        entity['onValueChange'] = oscard;
        entity['disabled'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot5 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useMessageRequestPrivacyOption
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.guild;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            zuuluu = entity.bind(report)();
            entity = null;
            if(zuuluu) { _fun00004_ip = 62; continue _fun00003 }
 42:
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot5;
            michal = {};
            michal['guild'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 62:
            return entity;
        }
    };
    zuuluu['useMessageRequestPrivacyOption'] = michal;
    return entity;
})();