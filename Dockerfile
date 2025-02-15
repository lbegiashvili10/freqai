# syntax=docker/dockerfile:1
# FROM freqtradeorg/freqtrade:develop_freqairl
FROM freqtradeorg/freqtrade:develop_freqairl
USER root

RUN apt-get update \
  && apt-get -y install build-essential libssl-dev git libffi-dev libgfortran5 pkg-config cmake gcc

ADD --keep-git-dir=true https://github.com/lbegiashvili10/freqai.git /opt/freqai-lstm
WORKDIR /opt/freqai-lstm

COPY ./user_data /freqtrade/user_data
COPY ./freqtrade/freqai/torch /freqtrade/freqtrade/freqai/torch/
COPY ./base_models /freqtrade/freqtrade/freqai/base_models/


WORKDIR /freqtrade
RUN sed -i "s/5m/1h/" freqtrade/configuration/config_validation.py
USER ftuser

RUN  pip install -e . 
