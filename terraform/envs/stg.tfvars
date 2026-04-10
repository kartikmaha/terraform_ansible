# ========================================
# STAGING Environment
# ========================================

environment  = "stg"
project_name = "terraform-ansible"

aws_region = "ap-south-1"

instance_type = "t3.micro"
key_name      = "terra-key"

vpc_cidr = "10.1.0.0/16"

public_subnet_cidrs = [
  "10.1.1.0/24",
  "10.1.2.0/24"
]

app_port = 80
