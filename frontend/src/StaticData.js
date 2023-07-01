// Importing Vowels Sounds
import a_sound_01_अ from './assets/vowelsAudio/s_01_a_अ.mp3';
import aa_sound_02_आ from './assets/vowelsAudio/s_02_aa_आ.mp3';
import i_sound_03_इ from './assets/vowelsAudio/s_03_i_इ.mp3';
import ii_sound_04_ई from './assets/vowelsAudio/s_04_ii_ई.mp3';
import u_sound_05_उ from './assets/vowelsAudio/s_05_u_उ.mp3';
import uu_sound_06_ऊ from './assets/vowelsAudio/s_06_uu_ऊ.mp3';
import e_sound_07_ए from './assets/vowelsAudio/s_07_e_ए.mp3';
import ai_sound_08_ऐ from './assets/vowelsAudio/s_08_ai_ऐ.mp3';
import o_sound_09_ओ from './assets/vowelsAudio/s_09_o_ओ.mp3';
import au_sound_10_औ from './assets/vowelsAudio/s_10_au_औ.mp3';
import an_sound_11_अं from './assets/vowelsAudio/s_11_an_अं.mp3';


// Importing Consonants Sounds
import ka_sound_01_क from './assets/consonantsAudio/s_01_ka_क.mp3';
import kha_sound_02_ख from './assets/consonantsAudio/s_02_kha_ख.mp3';
import ga_sound_03_ग from './assets/consonantsAudio/s_03_ga_ग.mp3';
import gha_sound_04_घ from './assets/consonantsAudio/s_04_gha_घ.mp3';
import cha_sound_05_च from './assets/consonantsAudio/s_05_cha_च.mp3';
import chha_sound_06_छ from './assets/consonantsAudio/s_06_chha_छ.mp3';
import ja_sound_07_ज from './assets/consonantsAudio/s_07_ja_ज.mp3';
import jha_sound_08_झ from './assets/consonantsAudio/s_08_jha_झ.mp3';
import ta_sound_09_ट from './assets/consonantsAudio/s_09_ta_ट.mp3';
import rna_sound_10_ण from './assets/consonantsAudio/s_10_rna_ण.mp3';
import ta_sound_11_त from './assets/consonantsAudio/s_11_ta_त.mp3';
import tha_sound_12_थ from './assets/consonantsAudio/s_12_tha_थ.mp3';
import da_sound_13_द from './assets/consonantsAudio/s_13_da_द.mp3';
import thda_sound_14_ध from './assets/consonantsAudio/s_14_thda_ध.mp3';
import na_sound_15_न from './assets/consonantsAudio/s_15_na_न.mp3';
import pa_sound_16_प from './assets/consonantsAudio/s_16_pa_प.mp3';
import fa_sound_17_फ from './assets/consonantsAudio/s_17_fa_फ.mp3';
import ba_sound_18_ब from './assets/consonantsAudio/s_18_ba_ब.mp3';
import bha_sound_19_भ from './assets/consonantsAudio/s_19_bha_भ.mp3';
import ma_sound_20_म from './assets/consonantsAudio/s_20_ma_म.mp3';
import ya_sound_21_य from './assets/consonantsAudio/s_21_ya_य.mp3';
import ra_sound_22_र from './assets/consonantsAudio/s_22_ra_र.mp3';
import va_sound_23_व from './assets/consonantsAudio/s_23_va_व.mp3';
import la_sound_24_ल from './assets/consonantsAudio/s_24_la_ल.mp3';
import sha_sound_25_श from './assets/consonantsAudio/s_25_sha_श.mp3';
import shha_sound_26_ष from './assets/consonantsAudio/s_26_shha_ष.mp3';
import sa_sound_27_स from './assets/consonantsAudio/s_27_sa_स.mp3';
import ha_sound_28_ह from './assets/consonantsAudio/s_28_ha_ह.mp3';
import arda_sound_29_ळ from './assets/consonantsAudio/s_29_arda_ळ.mp3';
import ksha_sound_30_क्ष from './assets/consonantsAudio/s_30_ksha_क्ष.mp3';


const vowels = [
    ['अ', 'a'],
    ['आ', 'aa'],
    ['इ', 'i'],
    ['ई', 'ii'],
    ['उ', 'u'],
    ['ऊ', 'uu'],
    ['ए', 'e'],
    ['ऐ', 'ai'],
    ['ओ', 'o'],
    ['औ', 'au'],
    ['अं', 'an']
];

const words = [
    ['आकाश', 'aakaash', 'sky'],
    ['आवड', 'aavd', 'like'],
    ['आसा', 'aasa', 'hope'],
    ['एक', 'ek', 'one'],
    ['ईचर', 'echar', 'pickle'],
    ['ओस', 'os', 'dew'],
    ['उमाळ', 'umaal', 'rain'],
    ['ऊर', 'oor', 'village'],
    ['एका', 'eka', 'one (feminine)'],
    ['अशी', 'ashi', 'like this'],
];

const words2 = [
    ['आकाश', 'aakaash', 'sky'],
    ['आवड', 'aavd', 'like'],
    ['आसा', 'aasa', 'hope'],
    ['एक', 'ek', 'one'],
    ['ईचर', 'echar', 'pickle'],
    ['ओस', 'os', 'dew'],
    ['उमाळ', 'umaal', 'rain'],
    ['ऊर', 'oor', 'village'],
    ['एका', 'eka', 'one (feminine)'],
    ['अशी', 'ashi', 'like this'],
    ['आभास', 'aabhaas', 'illusion'],
    ['आदर', 'aadar', 'respect'],
    ['आसर', 'aasar', 'occasion'],
    ['इंद्रिय', 'indriya', 'senses'],
    ['ईचव', 'eechav', 'to remember'],
    ['उदास', 'udaas', 'sad'],
    ['ऊर्जा', 'oorja', 'energy'],
    ['एकत्र', 'ekatr', 'together'],
    ['अंतर', 'antar', 'difference'],
    ['अनुभव', 'anubhav', 'experience'],
  ];

  const Consonants = [
    ['क', 'ka'],
    ['ख', 'kha'],
    ['ग', 'ga'],
    ['घ', 'gha'],
    ['च', 'cha'],
    ['छ', 'chha'],
    ['ज', 'ja'],
    ['झ', 'jha'],
    ['ट', 'ta'],
    ['ण', 'arna'],
    ['त', 'ta'],
    ['थ', 'tha'],
    ['द', 'da'],
    ['ध', 'dha'],
    ['न', 'na'],
    ['प', 'pa'],
    ['फ', 'pha'],
    ['ब', 'ba'],
    ['भ', 'bha'],
    ['म', 'ma'],
    ['य', 'ya'],
    ['र', 'ra'],
    ['ल', 'la'],
    ['व', 'va'],
    ['श', 'sha'],
    ['ष', 'scha'],
    ['स', 'sa'],
    ['ह', 'ha'],
    ['ळ', 'la'],
    ['क्ष', 'ksha']
  ];

const VowelSoundMapped = {
  'अ': a_sound_01_अ,
  'आ': aa_sound_02_आ,
  'इ': i_sound_03_इ,
  'ई': ii_sound_04_ई,
  'उ': u_sound_05_उ,
  'ऊ': uu_sound_06_ऊ,
  'ए': e_sound_07_ए,
  'ऐ': ai_sound_08_ऐ,
  'ओ': o_sound_09_ओ,
  'औ': au_sound_10_औ,
  'अं': an_sound_11_अं,
}

const ConsonantSoundMapped = {
  'क': ka_sound_01_क,
  'ख': kha_sound_02_ख,
  'ग': ga_sound_03_ग,
  'घ': gha_sound_04_घ,
  'च': cha_sound_05_च,
  'छ': chha_sound_06_छ,
  'ज': ja_sound_07_ज,
  'झ': jha_sound_08_झ,
  'ट': ta_sound_09_ट,
  'ण': rna_sound_10_ण,
  'त': ta_sound_11_त,
  'थ': tha_sound_12_थ,
  'द': da_sound_13_द,
  'ध': thda_sound_14_ध,
  'न': na_sound_15_न,
  'प': pa_sound_16_प,
  'फ': fa_sound_17_फ,
  'ब': ba_sound_18_ब,
  'भ': bha_sound_19_भ,
  'म': ma_sound_20_म,
  'य': ya_sound_21_य,
  'र': ra_sound_22_र,
  'व': va_sound_23_व,
  'ल': la_sound_24_ल,
  'श': sha_sound_25_श,
  'ष': shha_sound_26_ष,
  'स': sa_sound_27_स,
  'ह': ha_sound_28_ह,
  'ळ': arda_sound_29_ळ,
  'क्ष': ksha_sound_30_क्ष,
}

export {vowels, words, words2, VowelSoundMapped, Consonants, ConsonantSoundMapped};