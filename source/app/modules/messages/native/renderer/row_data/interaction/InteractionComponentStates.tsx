// app/modules/messages/native/renderer/row_data/interaction/InteractionComponentStates.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/interaction/InteractionComponentStates.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: InteractionComponentStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.message;
            var _closure2_slot0 = yankee;
            offset = entity.interaction;
            var _closure2_slot1 = offset;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 4;
            michal = option[michal];
            verify = oscard.bind(tangon)(michal);
            golfie = verify.useStateFromStores;
            michal = _closure1_slot4;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot4;
                entity = michal.getInteractionComponentStateVersion;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = golfie.bind(verify)(zuuluu, michal);
            golfie = _closure1_slot3;
            zuuluu = golfie.useContext;
            michal = 5;
            michal = option[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.RenderMessageOptionsContext;
            michal = zuuluu.bind(golfie)(michal);
            michal = michal.gifAutoPlay;
            var _closure2_slot2 = michal;
            zuuluu = yankee.getChannelId;
            golfie = zuuluu.bind(yankee)();
            zuuluu = 6;
            zuuluu = option[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.useShouldDisableInteractiveComponents;
            option = zuuluu.bind(oscard)(golfie);
            var _closure2_slot3 = option;
            oscard = _closure1_slot5;
            zuuluu = oscard.getChannel;
            zuuluu = zuuluu.bind(oscard)(golfie);
            oscard = null;
            oscard = oscard == zuuluu;
            verify = undefined;
            if(oscard) { _fun00002_ip = 191; continue _fun00001 }
 186:
            verify = zuuluu.guild_id;
 191:
            _closure2_slot4 = verify;
            golfie = _closure1_slot3;
            oscard = golfie.useMemo;
            zuuluu = new Array(5);
            zuuluu[0] = yankee;
            zuuluu[1] = offset;
            zuuluu[2] = verify;
            zuuluu[3] = option;
            zuuluu[4] = michal;
            michal = function() {
                michal = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 7;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                report = _closure2_slot0;
                entity['message'] = report;
                report = _closure2_slot4;
                entity['guildId'] = report;
                report = _closure2_slot1;
                entity['interaction'] = report;
                report = _closure2_slot3;
                entity['shouldDisableInteractiveComponents'] = report;
                report = true;
                entity['shouldShowMedia'] = report;
                report = false;
                entity['shouldObscureSpoiler'] = report;
                entity['shouldObscureExplicitMedia'] = report;
                entity['shouldAgeVerify'] = report;
                entity['shouldShowMosaicMediaDescriptions'] = report;
                tangon = _closure2_slot2;
                entity['shouldAutoPlayGifs'] = tangon;
                tangon = {};
                report = 0;
                tangon['embedBackgroundColor'] = report;
                entity['colors'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = oscard.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot6;
            michal = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 8;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            oscard = 'components';
            entity['keyPath'] = oscard;
            oscard = golfie.map;
            report = function(argFoo, argBar) {
                report = _closure1_slot6;
                tangon = {};
                entity = argFoo;
                tangon['rowProps'] = entity;
                zuuluu = undefined;
                michal = 'data';
                entity = argBar;
                entity = report.bind(zuuluu)(michal, tangon, entity);
                return entity;
            };
            report = oscard.bind(golfie)(report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();